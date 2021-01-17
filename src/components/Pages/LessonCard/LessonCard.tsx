import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import Styles from "./LessonCardStyles";
import { ThumbsUp } from "react-feather";
import Lesson from "../../../types/Lesson";
import GlobalStyles from "../../GlobalStyles";
import EditorStyles from "../Editor/EditorStyles";
import ReactPlayer from "react-player";

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
                <div style={{ width: "100%", maxWidth: 800, display: "table", marginLeft: "auto", marginRight: "auto", marginBottom: 20 }}>
                    <div style={{ position: "relative", paddingTop: "56.25%" }}>
                        <ReactPlayer controls={false} url={ this.props.lesson.video_url } className={ cx( EditorStyles.videoWrapperSizeModifier, EditorStyles.videoWrapper) } width="100%" height="100%"/>
                    </div>
                </div>
                <div style={{ width: "93%", display: "table", marginLeft: "auto", marginRight: "auto", margin: 5 }}>
                    <h3 style={{ fontFamily: "Open Sans, sans-serif", fontWeight: 800 }}>
                        <Link to={`/classroom/${this.props.lesson.id}`} className={cx( GlobalStyles.FLAT_LINK )}>{this.props.lesson.header}</Link>
                    </h3>
                    <p style={{ color: "#666", fontFamily: "Roboto, sans-serif", fontSize: 19 }}>
                        {this.props.lesson.description}
                    </p>
                    <span style={{ fontFamily: "Space Mono, monospace", fontSize: 17 }}>
                        <span style={{ color: "#EB5757" }}>{this.props.lesson.questions.length} Questions</span> {/*&middot; <span className={cx( Styles.upvoteStyles )}>
                            <ThumbsUp size={23} style={{ marginBottom: 3 }}/> 546
                        </span>*/}
                    </span>
                </div>
            </div>
        )
    }

}