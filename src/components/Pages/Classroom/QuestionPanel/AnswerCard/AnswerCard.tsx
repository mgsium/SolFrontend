import React from "react";

import { cx } from "emotion";
import Styles from "./AnswerCardStyles";

type Props = {
    submitAnswer: Function,
    index: 1 | 2 | 3 | 4,
    active?: boolean,
    dark?: boolean
};
type State = {};

export default class AnswerCard extends React.Component<Props, State> {

    defaultProps = {
        active: false,
        dark: false
    }

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={cx( Styles.answerCardStyles, "shadow-sm" )} onClick={() => { this.props.submitAnswer(this.props.index) }}>
                <h2 style={{ margin: 0 }}>{this.props.children}</h2>
            </div>
        )
    }
}