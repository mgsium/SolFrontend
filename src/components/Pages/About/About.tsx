import React from "react";
import Template from "../Template/Template";

type Props = {};
type State = {};

export default class About extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                <h1 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif" }}>About</h1>
                <h6 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif", color: "#6c757d" }}>More about Sol, from its creators.</h6>
                <br/>
                <p style={{ fontFamily: "Roboto, sans-serif", color: "#666", lineHeight: 1.8, fontSize: "15pt" }}>
                    The need for open access to knowledge and education is greater than ever - we created Sol with the aim of providing a more fun, engaging alternative to lecture-based learning. Sol allows you to learn in a video format with intercalated quizzes, allowing for both scalability and engagement.
                </p>
                <p style={{ fontFamily: "Roboto, sans-serif", color: "#666", lineHeight: 1.8, fontSize: "15pt" }}>
                    A lesson consists of a youtube video, and a question for every timestamp you indicate throughout the video. On the next page, you will insert the video, and then go through it, indicating moments where important information may have just been conveyed, or you may test the viewers knowledge on info randomly throughout the video to ensure they have kept engaged with the content. At these moments, you will input a question as well as 4 possible answers and indicate which answer is correct. Repeat this for as many timestamps as you see fit. This will form your lesson.
                </p>
            </Template>
        )
    }

}