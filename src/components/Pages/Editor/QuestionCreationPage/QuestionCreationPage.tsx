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
import QuestionCreationModal from "./QuestionCreationModal/QuestionCreation";
import Question from "../../../../types/Question";

type Props = {
    currentPageIndex: 0 | 1 | 2,
    updatePageIndex: Function,
    videoUrl: string,
    addQuestionToLesson: Function,
    questions: Array<Question>
};
type State = {
    showQuestionCreationModal: boolean,
    mostRecentTimestamp: number
};

export default class QuestionCreationPage extends React.Component<Props, State> {
    player: ReactPlayer;

    constructor(props: Props) {
        super(props);

        this.state = {
            showQuestionCreationModal: false,
            mostRecentTimestamp: 0
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
                    <ReactPlayer ref={this.ref} controls url={ this.props.videoUrl } playing={!this.state.showQuestionCreationModal} className={ cx( EditorStyles.videoWrapperSizeModifier, EditorStyles.videoWrapper) }/>
                    <br/>
                    <div style={{ color: "red", fontSize: "17pt", fontFamily: "Space Mono, monospace", display: "table", marginLeft: "auto", marginRight: "auto" }}>{this.props.questions.length} Questions</div>
                    <br/>
                    <Row>
                        <Button variant="danger" className={cx( EditorStyles.submitButtonStyles, "shadow-sm" )} onClick={this.openQuestionCreationModal}>
                            <h3 style={{ margin: 0, display: "inline-block" }}><Plus/>&nbsp;Add Question Here</h3>
                        </Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button variant="success" className={cx( EditorStyles.submitButtonStyles, "shadow-sm" )} style={{ width: "100%" }} onClick={() => {  }}>
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