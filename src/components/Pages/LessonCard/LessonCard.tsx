import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import Styles from "./LessonCardStyles";
import { ThumbsUp } from "react-feather";
import Lesson from "../../../types/Lesson";
import GlobalStyles from "../../GlobalStyles";

type Props = {
    lesson: Lesson
};
type State = {};

export default class LessonCard extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={cx( Styles.cardStyles, "shadow-sm" )}>
                <div className="video_wrapper" style={{ position: "relative", paddingBottom: "56.25%", marginBottom: 10 }}>
                    <iframe src={this.props.lesson.video_url} style={{ position: "absolute", borderRadius: 20, width: "100%", height: "100%", borderBottom: 10 }} frameBorder={0} allowFullScreen></iframe>
                </div>
                <h2>
                    <Link to={`/classroom/${this.props.lesson.id}`} className={cx( GlobalStyles.FLAT_LINK )}>{this.props.lesson.header}</Link>
                </h2>
                <p style={{ color: "#666", fontFamily: "Roboto, sans-serif", fontSize: 18 }}>
                    {this.props.lesson.description}
                </p>
                <span style={{ fontFamily: "Space Mono, monospace", fontSize: 17 }}>
                    <span style={{ color: "#EB5757" }}>{this.props.lesson.questions.length} Questions</span> {/*&middot; <span className={cx( Styles.upvoteStyles )}>
                        <ThumbsUp size={23} style={{ marginBottom: 3 }}/> 546
                    </span>*/}
                </span>
            </div>
        )
    }

}