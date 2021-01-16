import React from "react";

import { cx } from "emotion";
import Styles from "./LessonCardStyles";
import { ThumbsUp } from "react-feather";

type Props = {};
type State = {};

export default class LessonCard extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={cx( Styles.cardStyles, "shadow-sm" )}>
                <div className="video_wrapper" style={{ position: "relative", paddingBottom: "56.25%", marginBottom: 10 }}>
                    <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" style={{ position: "absolute", borderRadius: 20, width: "100%", height: "100%", borderBottom: 10 }} frameBorder={0} allowFullScreen></iframe>
                </div>
                <h2>How to Learn with Sol</h2>
                <p style={{ color: "#666", fontFamily: "Roboto, sans-serif", fontSize: 18 }}>
                    This is a short sample description for this sample lesson on Sol so I can test out how everything looks before I implement it for real.
                </p>
                <span style={{ fontFamily: "Space Mono, monospace", fontSize: 17 }}>
                    <span style={{ color: "#EB5757" }}>4 Questions</span> &middot; <span className={cx( Styles.upvoteStyles )}>
                        <ThumbsUp size={23} style={{ marginBottom: 3 }}/> 546
                    </span>
                </span>
            </div>
        )
    }

}