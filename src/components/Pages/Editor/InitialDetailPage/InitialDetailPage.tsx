import React from "react";

import { cx } from "emotion";
import Styles from "./InitialDetailPageStyles";
import EditorStyles from "../EditorStyles";

import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { ArrowRight } from "react-feather";
import SectionBody from "../SectionBody/SectionBody";
import SectionHeader from "../SectionHeader/SectionHeader";

type Props = {
    currentPageIndex: 0 | 1 | 2,
    updatePageIndex: Function,
    confirmInitialDetails: Function
};
type State = {
    header: string,
    description: string,
    author_name: string,
    more_info: string
};

export default class InitialDetailPage extends React.Component<Props, State> {
    
    headerCharacterLimit: number = 50;
    descriptionCharacterLimit: number = 200;
    authorNameCharacterLimit: number = 40;
    moreInfoCharacterLimit: number = 200;

    constructor(props: Props) {
        super(props);

        this.state = {
            header: "",
            description: "",
            author_name: "",
            more_info: ""
        }

        // Method Bindings
        this.updateHeader = this.updateHeader.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateAuthorName = this.updateAuthorName.bind(this);
        this.updateMoreInfoField = this.updateMoreInfoField.bind(this);
    }

    updateHeader(e: any) {
        if(e.target.value.length > this.headerCharacterLimit) return;
        this.setState({ header: e.target.value });
    }

    updateDescription(e:any) {
        if(e.target.value.length > this.descriptionCharacterLimit) return;
        this.setState({ description: e.target.value });
    }

    updateAuthorName(e: any) {
        if(e.target.value.length > this.authorNameCharacterLimit) return;
        this.setState({ author_name: e.target.value });
    }

    updateMoreInfoField(e: any) {
        if(e.target.value.length > this.moreInfoCharacterLimit) return;
        this.setState({ more_info: e.target.value });
    }

    render() {
        return (
            <div id="lessonDetailsPage" hidden={ this.props.currentPageIndex != 0 }>
                <h1 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif" }}>Create a Lesson</h1>
                <h6 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif", color: "#6c757d" }}>Add the details here - You'll create the actual lesson on the next page</h6>
                <SectionHeader>Header & Description</SectionHeader>
                <br/>
                <SectionBody>
                    <Form>
                        <Form.Group controlId="formLessonHeader">
                            <Form.Label>Lesson Header</Form.Label>
                            <Form.Control 
                                placeholder="Title your lesson..." 
                                size="lg"
                                maxLength={this.headerCharacterLimit}
                                value={this.state.header}
                                onChange={this.updateHeader}
                                onFocus={this.updateHeader}
                            />
                            <Form.Text className="text-muted">
                                Be descriptive, include relevant keywords
                                <span style={{float: 'right'}}>{this.state.header.length} / {this.headerCharacterLimit}</span>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formLessonDescription">
                            <Form.Label>Lesson Description</Form.Label>
                            <Form.Control 
                                placeholder="Describe your lesson..." 
                                as="textarea" 
                                rows={3}
                                maxLength={this.descriptionCharacterLimit} 
                                name="lessonDescription" 
                                value={this.state.description} 
                                onChange={this.updateDescription}
                                onFocus={this.updateDescription}
                            />
                            <Form.Text className="text-muted">
                                Further expand on what you want to teach
                                <span style={{float: 'right'}}>{this.state.description.length} / {this.descriptionCharacterLimit}</span>
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
                            <Form.Control 
                                placeholder="Your Name..." 
                                size="lg"
                                maxLength={this.authorNameCharacterLimit}
                                value={this.state.author_name}
                                onChange={this.updateAuthorName}
                                onFocus={this.updateAuthorName}
                            />
                            <Form.Text className="text-muted">
                                Your Name!
                                <span style={{float: 'right'}}>{this.state.author_name.length} / {this.authorNameCharacterLimit}</span>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formAdditionalDetails">
                            <Form.Label>Additional Details (Optional)</Form.Label>
                            <Form.Control 
                                placeholder="Tell us about yourself..." 
                                as="textarea" 
                                rows={3}
                                maxLength={this.moreInfoCharacterLimit} 
                                name="lessonDescription" 
                                value={this.state.more_info} 
                                onChange={this.updateMoreInfoField}
                                onFocus={this.updateMoreInfoField}
                            />
                            <Form.Text className="text-muted">
                                Here you can talk a bit about yourself - Feel free to drop your contact details, socials, or anything else you want to share!
                                <span style={{float: 'right'}}>{this.state.more_info.length} / {this.moreInfoCharacterLimit}</span>
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </SectionBody>
                <br/><br/>

                <Button variant="success" className={cx( EditorStyles.submitButtonStyles, "shadow-sm" )} onClick={() => { this.props.updatePageIndex(1); this.props.confirmInitialDetails(this.state.header, this.state.description, this.state.author_name, this.state.more_info); }}>
                    <h3 style={{ margin: 0, display: "inline-block" }}>Continue&nbsp;<ArrowRight/></h3>
                </Button>
            </div>
        )
    }

}