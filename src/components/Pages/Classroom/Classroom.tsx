import React from "react";

import { cx } from "emotion";
import Styles from "./ClassroomStyles";
import Template from "../Template/Template";
import Lesson from "../../../types/Lesson";
import LessonSwitch from "../../../httpclient/LessonSwitch";
import QuestionPanel from "./QuestionPanel/QuestionPanel";

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

        LessonSwitch.getLesson("hardly-done-here", this)
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
                <br/>
                <div className="video_wrapper" style={{ position: "relative", paddingBottom: "56.25%", marginBottom: 10 }}>
                    <iframe src={this.state.lesson.video_url} style={{ position: "absolute", borderRadius: 20, width: "100%", height: "100%", borderBottom: 10 }} frameBorder={0} allowFullScreen></iframe>
                </div>
                <br/>
                <QuestionPanel question={this.state.lesson.questions[0]}/>
                <hr/>
                <div style={{ textAlign: "center" }}>
                    <small style={{ fontWeight: "bold", fontFamily: "Roboto, sans-serif" }}>DESCRIPTION</small>
                    <p style={{ fontFamily: "Roboto, sans-serif"}}>{this.state.lesson.description}</p>
                    <small style={{ fontWeight: "bold", fontFamily: "Roboto, sans-serif" }}>AUTHOR</small>
                    <p style={{ fontFamily: "Roboto, sans-serif"}}>{this.state.lesson.author_name}</p>
                    <small style={{ fontWeight: "bold", fontFamily: "Roboto, sans-serif" }}>MORE ABOUT THE AUTHOR</small>
                    <p style={{ fontFamily: "Roboto, sans-serif"}}>{this.state.lesson.more_info}</p>
                </div>
            </Template>
        )
    }

}