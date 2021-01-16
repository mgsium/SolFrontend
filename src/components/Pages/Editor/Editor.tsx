import React from "react";

import { cx } from "emotion";
import Styles from "./EditorStyles";
import Template from "../Template/Template";
import SectionHeader from "./SectionHeader/SectionHeader";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { ArrowRight } from "react-feather";
import SectionBody from "./SectionBody/SectionBody";
import QuestionPanel from '../Classroom/QuestionPanel/QuestionPanel';

import ReactPlayer from "react-player"

type Props = {};
type State = {
    lessonDescription: {value:string, count:number},
    showingLessonPage: boolean,
    youtubeURL: string,
    currentPage: 0 | 1 | 2 
};


export default class Editor extends React.Component<Props, State> {

    descriptionCharsMax:number = 280
    

    constructor(props: Props) {
        super(props);

        this.state = {

            lessonDescription: {
              value: '',
              count: 0,
            },
    
            showingLessonPage: false,
            youtubeURL: "",
            currentPage: 0,
    
        };

        this.setURL= this.setURL.bind(this);

    }

    handleChange = (e:any) => {
        if(e.target.value.length > this.descriptionCharsMax) return;
        this.setState({lessonDescription: {value: e.target.value, count: e.target.value.length }});
    }

    setURL(e:any) {
        this.setState({youtubeURL: e.target.value});
    }

    render() {

        const { lessonDescription } = this.state;
        const { showingLessonPage } = this.state;
        console.log(this.state.youtubeURL)

        return (
            <Template>
                    <div id="lessonDetailsPage" hidden={ this.state.currentPage != 0 }>
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
                                    <Form.Control 
                                        placeholder="Describe your lesson..." 
                                        as="textarea" 
                                        rows={3}
                                        maxLength={this.descriptionCharsMax} 
                                        name="lessonDescription" 
                                        value={lessonDescription.value} onChange={this.handleChange} onFocus={this.handleChange}
                                    />
                                    <Form.Text className="text-muted">
                                        Further expand on what you want to teach
                                        <span style={{float: 'right'}}>{lessonDescription.count} / {this.descriptionCharsMax}</span>
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

                        <Button variant="success" className={cx( Styles.submitButtonStyles, "shadow-sm" )} onClick={() => this.setState({ currentPage: 1 })}>
                            <h3 style={{ margin: 0, display: "inline-block" }}>Continue&nbsp;<ArrowRight/></h3>
                        </Button>
                    </div>

                    <div id="lessonCreationPage" hidden={ this.state.currentPage != 1 }>
                        <Col>

                            <Row>
                                <Form.Control 
                                    id="lesson-youtube-url"
                                    type="text" 
                                    size="lg"
                                    placeholder="Input Youtube URL..."
                                    className={ cx( Styles.URLBarStyles, "shadow-sm" ) }
                                    onChange={this.setURL}
                                    style={{ textAlign: "center" }}
                                />
                            </Row>
                            <br/>

                            <ReactPlayer url={this.state.youtubeURL} className={ cx( Styles.videoWrapper) } />
                            <br/>

                            <Row>
                                <Button variant="success" className={cx( Styles.submitButtonStyles, "shadow-sm" )} onClick={null}>
                                    <h3 style={{ margin: 0, display: "inline-block" }}>Confirm Video&nbsp;<ArrowRight/></h3>
                                </Button>
                            </Row>

                        </Col>
                    </div> 
            </Template>
        )
    }

}