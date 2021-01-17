import React from "react";

import { cx } from "emotion";
import Styles from "./AnswerCardStyles";

type Props = {
    submitAnswer: Function,
    index: 1 | 2 | 3 | 4,
    active?: boolean,
    dark?: boolean,
    correctAnsIndex: 1 | 2 | 3 | 4,
    showCorrectAns: boolean
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
        let activeStyle: string = (this.props.correctAnsIndex == this.props.index ? Styles.correctAnsStyles : Styles.incorrectAnsStyles );
        return (
            <div className={cx( Styles.answerCardStyles, "shadow-sm", (this.props.showCorrectAns ? activeStyle : null) )} onClick={() => { this.props.submitAnswer(this.props.index) }}>
                <h2 style={{ margin: 0 }}>{this.props.children}</h2>
            </div>
        )
    }
}