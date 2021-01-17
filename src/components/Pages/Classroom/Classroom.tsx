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

type Props = {};
type State = {
    loading: boolean,
    lesson: Lesson
};

export default class Classroom extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            loading: true,
            lesson: null
        }

        // @ts-expect-error
        LessonSwitch.getLesson(this.props.match.params.id, this)
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
                <div>
                    <div style={{ position: "relative", paddingTop: "56.25%" }}>
                        <ReactPlayer url={ this.state.lesson.video_url } className={ cx( EditorStyles.videoWrapperSizeModifier, EditorStyles.videoWrapper) } width="100%" height="100%"/>
                    </div>
                </div>
                <br/>
                <div hidden>
                    <QuestionPanel question={this.state.lesson.questions[0]}/>
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