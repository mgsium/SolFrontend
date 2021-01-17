import React from "react";

import { cx } from "emotion";
import Styles from "./QuestionCreationModalStyles";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";
import QuestionBuilder from "../QuestionBuilder";

type Props = {
    timestamp: number,
    showModal: boolean,
    closeModal: Function,
    submitQuestion: Function
};
type State = {
    questionBuilder: QuestionBuilder
};

export default class QuestionCreationModal extends React.Component<Props, State> {

    answerCharacterLimit: number = 160;
    explanationCharacterLimit: number = 400;

    constructor(props: Props) {
        super(props);

        this.state = {
            questionBuilder: new QuestionBuilder()
        }

        // Method Bindings
        this.setAns = this.setAns.bind(this);
        this.updateExplanation = this.updateExplanation.bind(this);
        this.updateCorrectAns = this.updateCorrectAns.bind(this);
        this.submitQuestion = this.submitQuestion.bind(this);
    }

    setAns(index: 1 | 2 | 3 | 4, e: any) {
        if(e.target.value.length > this.answerCharacterLimit) return;
        const questionBuilder: QuestionBuilder = this.state.questionBuilder;
        switch(index) {
            case 1: questionBuilder.setAnsOne(e.target.value); break;
            case 2: questionBuilder.setAnsTwo(e.target.value); break;
            case 3: questionBuilder.setAnsThree(e.target.value); break;
            case 4: questionBuilder.setAnsFour(e.target.value); break;
        }
        this.setState({ questionBuilder: questionBuilder });
    }

    updateCorrectAns(e: any) {
        const questionBuilder: QuestionBuilder = this.state.questionBuilder;
        console.log(e.target.value);
        questionBuilder.setCorrectAns(e.target.value);
        this.setState({ questionBuilder: questionBuilder });
    }

    updateExplanation(e: any) {
        if(e.target.value.length > this.explanationCharacterLimit) return;
        const questionBuilder: QuestionBuilder = this.state.questionBuilder;
        questionBuilder.setExplanation(e.target.value);
        this.setState({ questionBuilder: questionBuilder });
    }

    submitQuestion() {
        const questionBuilder: QuestionBuilder = this.state.questionBuilder;
        questionBuilder.setTimestamp(this.props.timestamp);
        this.setState({ questionBuilder: questionBuilder }, () => {
            this.props.submitQuestion(this.state.questionBuilder.getQuestion());
        });
    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeModal} backdrop="static" className={cx( Styles.modalStyles )} centered>
                <Modal.Header style={{ borderBottom: 0 }}>
                    <Modal.Title style={{ fontFamily: "Open Sans, sans-serif", display: "table", marginLeft: "auto", marginRight: "auto", marginTop: 25, marginBottom: 5 }}>Add a Question</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ fontFamily: "Roboto, sans-serif" }}>
                    <div style={{ width: "75%", display: "table", marginLeft: "auto", marginRight: "auto" }}>
                    <Form>
                        <Form.Group controlId="formQuestionOptionOne">
                            <Form.Label>Option One</Form.Label>
                            <Form.Control 
                                placeholder="First Option..." 
                                size="lg"
                                maxLength={this.answerCharacterLimit}
                                value={this.state.questionBuilder.getAnsOne()}
                                onChange={(e: any) => { this.setAns(1, e) }}
                                onFocus={(e: any) => { this.setAns(1, e) }}
                            />
                            <Form.Text className="text-muted">
                                Option 1/4!
                                <span style={{float: 'right'}}>{this.state.questionBuilder.getAnsOne() ? this.state.questionBuilder.getAnsOne().length : 0} / {this.answerCharacterLimit}</span>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formQuestionOptioTwo">
                            <Form.Label>Option Two</Form.Label>
                            <Form.Control 
                                placeholder="Second Option..." 
                                size="lg"
                                maxLength={this.answerCharacterLimit}
                                value={this.state.questionBuilder.getAnsTwo()}
                                onChange={(e: any) => { this.setAns(2, e) }}
                                onFocus={(e: any) => { this.setAns(2, e) }}
                            />
                            <Form.Text className="text-muted">
                                Option 2/4!
                                <span style={{float: 'right'}}>{this.state.questionBuilder.getAnsTwo() ? this.state.questionBuilder.getAnsTwo().length : 0} / {this.answerCharacterLimit}</span>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formQuestionOptionThree">
                            <Form.Label>Option Three</Form.Label>
                            <Form.Control 
                                placeholder="Third Option..." 
                                size="lg"
                                maxLength={this.answerCharacterLimit}
                                value={this.state.questionBuilder.getAnsThree()}
                                onChange={(e: any) => { this.setAns(3, e) }}
                                onFocus={(e: any) => { this.setAns(3, e) }}
                            />
                            <Form.Text className="text-muted">
                                Option 3/4!
                                <span style={{float: 'right'}}>{this.state.questionBuilder.getAnsThree() ? this.state.questionBuilder.getAnsThree().length : 0} / {this.answerCharacterLimit}</span>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formQuestionOptionFour">
                            <Form.Label>Option Four</Form.Label>
                            <Form.Control 
                                placeholder="Fourth Option..." 
                                size="lg"
                                maxLength={this.answerCharacterLimit}
                                value={this.state.questionBuilder.getAnsFour()}
                                onChange={(e: any) => { this.setAns(4, e) }}
                                onFocus={(e: any) => { this.setAns(4, e) }}
                            />
                            <Form.Text className="text-muted">
                                Option 4/4!
                                <span style={{float: 'right'}}>{this.state.questionBuilder.getAnsFour() ? this.state.questionBuilder.getAnsFour().length : 0} / {this.answerCharacterLimit}</span>
                            </Form.Text>
                        </Form.Group>
                        <hr/>
                        <Form.Group controlId="formQuestionCorrectAnswer">
                            <Form.Label>Correct Answer</Form.Label>
                            <Form.Control size="lg" as="select" onChange={this.updateCorrectAns}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formQuestionExplanation">
                            <Form.Label>Explanation</Form.Label>
                            <Form.Control 
                                placeholder="Explain the answer in detail..." 
                                as="textarea" 
                                rows={3}
                                maxLength={this.explanationCharacterLimit} 
                                name="questionExplanation" 
                                value={this.state.questionBuilder.getExplanation()} 
                                onChange={this.updateExplanation}
                                onFocus={this.updateExplanation}
                            />
                            <Form.Text className="text-muted">
                                You can use this to write a more detailed description of the answer.
                                <span style={{float: 'right'}}>{this.state.questionBuilder.getExplanation() ? this.state.questionBuilder.getExplanation().length : 0} / {this.explanationCharacterLimit}</span>
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ borderTop: 0 }}>
                    <div style={{ width: "75%", display: "table", marginLeft: "auto", marginRight: "auto", marginBottom: 25 }}>
                        <div style={{ fontFamily: "Jost, sans-serif" }}>
                            <Button variant="success" onClick={this.submitQuestion} style={{ width: "100%", borderRadius: 20, padding: 12, fontSize: "17pt" }}>&nbsp;Submit&nbsp;</Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        )
    }

}