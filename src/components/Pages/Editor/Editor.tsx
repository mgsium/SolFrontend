import React from "react";

import { cx } from "emotion";
import Styles from "./EditorStyles";
import Template from "../Template/Template";
import SectionHeader from "./SectionHeader/SectionHeader";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { ArrowRight } from "react-feather";
import SectionBody from "./SectionBody/SectionBody";

type Props = {};
type State = {};

export default class Editor extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                <div>
                    <h1 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif" }}>Create a Lesson</h1>
                    <h6 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif", color: "#6c757d" }}>Add the details here - You'll create the actual lesson on the next page</h6>

                    <SectionHeader>Header & Description</SectionHeader>
                    <br/>
                    <SectionBody>
                        <Form>
                            <Form.Group controlId="formLessonHeader">
                                <Form.Label>Lesson Header</Form.Label>
                                <Form.Control placeholder="Title your lesson..." size="lg"/>
                                <Form.Text className="text-muted">
                                    Be descriptive, include relevant keywords
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formLessonDescription">
                                <Form.Label>Lesson Description</Form.Label>
                                <Form.Control placeholder="Describe your lesson..." as="textarea" rows={3}/>
                                <Form.Text className="text-muted">
                                    Further expand on what you want to teach
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </SectionBody>
                    <br/><br/>

                    <SectionHeader>More about you</SectionHeader>
                    <br/>
                    <SectionBody>
                        <Form>
                            <Form.Group controlId="formCreatorName">
                                <Form.Label>Your Name (Optional)</Form.Label>
                                <Form.Control size="lg"/>
                            </Form.Group>

                            <Form.Group controlId="formAdditionalDetails">
                                <Form.Label>Additional Details (Optional)</Form.Label>
                                <Form.Control as="textarea" rows={3}/>
                                <Form.Text className="text-muted">
                                    Here you can talk a bit about yourself - Feel free to drop your contact details, socials, or anything else you want to share!
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </SectionBody>
                    <br/><br/>

                    <Button variant="success" className={cx( Styles.submitButtonStyles, "shadow-sm" )}>
                        <h3 style={{ margin: 0, display: "inline-block" }}>Continue&nbsp;<ArrowRight/></h3>
                    </Button>
                </div>
            </Template>
        )
    }

}