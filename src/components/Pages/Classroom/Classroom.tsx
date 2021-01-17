import React from "react";
import { withRouter } from "react-router";

import { cx } from "emotion";
import Styles from "./ClassroomStyles";
import Template from "../Template/Template";
import Lesson from "../../../types/Lesson";
import LessonSwitch from "../../../httpclient/LessonSwitch";
import QuestionPanel from "./QuestionPanel/QuestionPanel";
import EditorStyles from "../Editor/EditorStyles";
import ReactPlayer from "react-player";
import Col from "react-bootstrap/esm/Col";
import Question from "../../../types/Question";

import $ from "jquery";

type Props = {};
type State = {
    loading: boolean,
    lesson: Lesson,
    nextQuestionIndex: number,
    nextQuestion: Question,
    showQuestionPanel: boolean
};

export default class Classroom extends React.Component<Props, State> {
    interval: NodeJS.Timeout;
    player: ReactPlayer;

    constructor(props: Props) {
        super(props);

        this.state = {
            loading: true,
            lesson: null,
            nextQuestionIndex: 0,
            nextQuestion: {
                id: 0,
                header: "",
                ans_one: "",
                ans_two: "",
                ans_three: "",
                ans_four: "",
                correct_ans: 1,
                explanation: "",
                timestamp: 0
            },
            showQuestionPanel: false
        }

        // @ts-expect-error
        LessonSwitch.getLesson(this.props.match.params.id, this)

        // Method Bindings
        this.checkProgress = this.checkProgress.bind(this);
        this.hideQuestionPanel = this.hideQuestionPanel.bind(this);
    }

    checkProgress() {
        const nextQuestionIndex: number = this.state.nextQuestionIndex;
        // If the video hasn't loaded or passed last question, exit;
        if (!this.state.lesson || nextQuestionIndex == this.state.lesson.questions.length) { console.log("NOT LOADED"); return; }
        // Get Next Question
        const nextQuestion: Question = this.state.lesson.questions[nextQuestionIndex];
        // TODO: Check Edge Cases
        const lowerBound: number = nextQuestion.timestamp - 2.5;
        const upperBound: number = nextQuestion.timestamp + 2.5;
        const currentTime: number = this.player.getCurrentTime();
        if (currentTime > lowerBound && currentTime < upperBound) {
            // Pause progress checking.
            clearInterval(this.interval);
            // Set next question in state & show question panel (& increment index count)
            this.setState({ showQuestionPanel: true, nextQuestion: nextQuestion, nextQuestionIndex: nextQuestionIndex + 1 });
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.checkProgress, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    hideQuestionPanel() {
        this.setState({ showQuestionPanel: false });
    }

    ref = (player: ReactPlayer) => {
        this.player = player;
    }
    
    render() {
        if (this.state.loading) {
            return (
                <Template>
                    <h1>Loading...</h1>
                </Template>
            )
        }

        return (
            <Template>
                <h2 style={{ textAlign: "center", fontFamily: "Open Sans, sans-serif" }}>{this.state.lesson.header}</h2>
                <p style={{ textAlign: "center", fontFamily: "Roboto, sans-serif", color: "#666" }}>{this.state.lesson.description}</p>
                <br/>
                <div style={{ position: "relative", paddingTop: "56.25%" }} hidden={this.state.showQuestionPanel}>
                    <ReactPlayer controls={!this.state.showQuestionPanel} playing={!this.state.showQuestionPanel} ref={this.ref} url={ this.state.lesson.video_url } className={ cx( EditorStyles.videoWrapperSizeModifier, EditorStyles.videoWrapper) } width="100%" height="100%"/>
                </div>
                <br/>
                <div hidden={!this.state.showQuestionPanel}>
                    <QuestionPanel question={this.state.nextQuestion} hideQuestionPanel={this.hideQuestionPanel}/>
                </div>
                <hr/>
                <div style={{ textAlign: "center" }}>
                    <small style={{ fontWeight: "bold", fontFamily: "Roboto, sans-serif" }}>AUTHOR</small>
                    <p style={{ fontFamily: "Roboto, sans-serif"}}>{this.state.lesson.author_name}</p>
                    <small style={{ fontWeight: "bold", fontFamily: "Roboto, sans-serif" }}>MORE ABOUT THE AUTHOR</small>
                    <p style={{ fontFamily: "Roboto, sans-serif"}}>{this.state.lesson.more_info}</p>
                </div>
            </Template>
        )
    }

}