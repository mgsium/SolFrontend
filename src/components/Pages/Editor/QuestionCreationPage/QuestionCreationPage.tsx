import React from "react";

import { cx } from "emotion";
import Styles from "./QuestionCreationPageStyles";

import ReactPlayer from "react-player";
import EditorStyles from "../EditorStyles";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Modal from "react-bootstrap/Modal";

import { ArrowRight, Plus } from "react-feather";
import { faTheRedYeti } from "@fortawesome/free-brands-svg-icons";
import Form from "react-bootstrap/esm/Form";
import QuestionBuilder from "./QuestionBuilder";
import QuestionCreationModal from "./QuestionCreationModal/QuestionCreationModal";
import Question from "../../../../types/Question";

type Props = {
    currentPageIndex: 0 | 1 | 2 | 3,
    updatePageIndex: Function,
    videoUrl: string,
    addQuestionToLesson: Function,
    questions: Array<Question>,
    submitLesson: Function
};
type State = {
    showQuestionCreationModal: boolean,
    mostRecentTimestamp: number,
    finished: boolean
};

export default class QuestionCreationPage extends React.Component<Props, State> {
    player: ReactPlayer;

    constructor(props: Props) {
        super(props);

        this.state = {
            showQuestionCreationModal: false,
            mostRecentTimestamp: 0,
            finished: false
        }

        // Method Bindings
        this.openQuestionCreationModal = this.openQuestionCreationModal.bind(this);
        this.hideQuestionCreationModal = this.hideQuestionCreationModal.bind(this);
        this.submitQuestion = this.submitQuestion.bind(this);
    }

    openQuestionCreationModal() {
        this.setState({ showQuestionCreationModal: true, mostRecentTimestamp: this.player.getCurrentTime() });
    }

    hideQuestionCreationModal() {
        this.setState({ showQuestionCreationModal: false });
    }

    submitQuestion(question: Question) {
        this.setState({ showQuestionCreationModal: false });
        this.props.addQuestionToLesson(question);
    }

    formatTime(time: number) {
        var hrs = (~~(time / 3600)).toString();
        var mins = (~~((time % 3600) / 60)).toString();
        var secs = (~~time % 60).toString();
        
        if (parseInt(hrs) != 0) {
            if (parseInt(mins) < 10) {
                mins = "0" + mins;
            }
        }

        if (parseInt(secs) < 10) {
            secs = "0" + secs;
        }

        return (parseInt(hrs) != 0) ? `${hrs}:${mins}:${secs}` : `${mins}:${secs}`;

    }

    ref = (player: ReactPlayer) => {
        this.player = player;
    }

    render() {
        return (
            <>
                <div hidden={ this.props.currentPageIndex != 2 }>
                    <h1 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif" }}>Add Questions</h1>
                    <h6 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif", color: "#6c757d" }}>Set questions at specific points in the video to help your audience better engage with their learning!</h6>
                    <br/>
                    <div style={{ width: "100%", maxWidth: 800, display: "table", marginLeft: "auto", marginRight: "auto" }}>
                        <div style={{ position: "relative", paddingTop: "56.25%" }}>
                            <ReactPlayer ref={this.ref} controls url={ this.props.videoUrl } playing={!this.state.showQuestionCreationModal && !this.state.finished} className={ cx( EditorStyles.videoWrapperSizeModifier, EditorStyles.videoWrapper) } width="100%" height="100%"/>
                        </div>
                    </div>
                    <br/>
                    <Row>
                        <Button variant="danger" className={cx( EditorStyles.submitButtonStyles, "shadow-sm" )} onClick={this.openQuestionCreationModal}>
                            <h3 style={{ margin: 0, display: "inline-block" }}><Plus/>&nbsp;Add Question Here</h3>
                        </Button>
                    </Row>
                    <br/>
                    {
                        this.props.questions.sort((a, b) => a.timestamp-b.timestamp ).map( q => (
                            <div className={cx( Styles.questionContainer)}>
                                <h4 style={{ textAlign: "center", fontFamily: "Roboto, sans-serif", margin: 0 }}><strong>{q.header}</strong> ({this.formatTime(q.timestamp)})</h4>
                            </div>
                        ) )
                    }
                    <br/>
                    <Row>
                        <Button variant="success" className={cx( EditorStyles.submitButtonStyles, "shadow-sm" )} style={{ width: "100%" }} onClick={() => { this.setState({ finished: true }); this.props.updatePageIndex(3); this.props.submitLesson(); }} disabled={this.props.questions.length === 0}>
                            <h3 style={{ margin: 0, display: "inline-block" }}>Finish!&nbsp;<ArrowRight/></h3>
                        </Button>
                    </Row>
                </div>
                <QuestionCreationModal
                    timestamp={this.state.mostRecentTimestamp}
                    showModal={this.state.showQuestionCreationModal}
                    closeModal={this.hideQuestionCreationModal}
                    submitQuestion={this.submitQuestion}
                />
            </>
        )
    }

}