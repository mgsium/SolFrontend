import React from "react";

import { cx } from "emotion";
import Styles from "./QuestionPanelStyles";
import Lesson from "../../../../types/Lesson";
import AnswerCard from "./AnswerCard/AnswerCard";
import Question from "../../../../types/Question";

type Props = {
    question: Question
};
type State = {};

export default class QuestionPanel extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        // Method Bindings
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    submitAnswer(index: 1 | 2 | 3 | 4) {
        console.log(index);
    }

    render() {
        return (
            <>
                <h2 style={{ textAlign: "center" }}>Answer this Question</h2>
                <br/>
                <AnswerCard active index={1} submitAnswer={this.submitAnswer}>{this.props.question.ans_one}</AnswerCard>
                <AnswerCard index={2} submitAnswer={this.submitAnswer}>{this.props.question.ans_two}</AnswerCard>
                <AnswerCard index={3} submitAnswer={this.submitAnswer}>{this.props.question.ans_three}</AnswerCard>
                <AnswerCard index={4} submitAnswer={this.submitAnswer}>{this.props.question.ans_four}</AnswerCard>
            </>
        )
    }

}