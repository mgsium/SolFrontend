import React from "react";

import { cx } from "emotion";
import Styles from "./QuestionPanelStyles";
import Lesson from "../../../../types/Lesson";
import AnswerCard from "./AnswerCard/AnswerCard";
import Question from "../../../../types/Question";
import Button from "react-bootstrap/esm/Button";

type Props = {
    question: Question
    hideQuestionPanel: Function
};
type State = {
    showCorrectAns: boolean,
    submittedAns: 1 | 2 | 3 | 4
};

export default class QuestionPanel extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            showCorrectAns: false,
            submittedAns: 1
        }

        // Method Bindings
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    submitAnswer(index: 1 | 2 | 3 | 4) {
        this.setState({ showCorrectAns: true, submittedAns: index });
    }

    render() {
        return (
            <>
                <div style={{ border: "1px solid #DCDCDC", borderRadius: 20, padding: 25, background: "whitesmoke" }}>
                    <br/>
                    <h2 style={{ textAlign: "center" }}>Q: {this.props.question.header}</h2>
                    <br/>
                    <AnswerCard index={1} showCorrectAns={this.state.showCorrectAns} correctAnsIndex={this.props.question.correct_ans as (1 | 2 | 3 | 4)} submitAnswer={this.submitAnswer}>{this.props.question.ans_one}</AnswerCard>
                    <AnswerCard index={2} showCorrectAns={this.state.showCorrectAns} correctAnsIndex={this.props.question.correct_ans as (1 | 2 | 3 | 4)} submitAnswer={this.submitAnswer}>{this.props.question.ans_two}</AnswerCard>
                    <AnswerCard index={3} showCorrectAns={this.state.showCorrectAns} correctAnsIndex={this.props.question.correct_ans as (1 | 2 | 3 | 4)} submitAnswer={this.submitAnswer}>{this.props.question.ans_three}</AnswerCard>
                    <AnswerCard index={4} showCorrectAns={this.state.showCorrectAns} correctAnsIndex={this.props.question.correct_ans as (1 | 2 | 3 | 4)} submitAnswer={this.submitAnswer}>{this.props.question.ans_four}</AnswerCard>
                    <div style={{ width: "70%", margin: 20, display: "table", marginLeft: "auto", marginRight: "auto", color: "#666", fontFamily: "Roboto, sans-serif", textAlign: "center" }} hidden={!this.props.question.explanation || !this.state.showCorrectAns}>
                        <p>Explanation: {this.props.question.explanation}</p>
                    </div>
                </div>
                <Button size="lg" variant="light" className={cx( Styles.resumeButtonStyles, "shadow-sm" )} hidden={!this.state.showCorrectAns} onClick={() => { this.props.hideQuestionPanel(); }}>
                    &nbsp;Resume Video&nbsp;
                </Button>
            </>
        )
    }

}