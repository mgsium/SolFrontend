import React from "react";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { cx } from "emotion";
import Styles from "./HomeStyles";
import Template from "../Template/Template";
import Col from "react-bootstrap/esm/Col";

import { GitHub, Heart, Link as LinkIcon, Plus, Search } from "react-feather";
import LessonCard from "../LessonCard/LessonCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

type Props = {
    performLessonSearch: Function,
    dark: boolean
};
type State = {};

export default class Home extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    performLessonSearch() {

    }

    render() {
        return (
            <Template>
                <div style={{ textAlign: "center", margin: "50px 0px" }}>
                    <h1 style={{ fontFamily: "Open Sans, sans-serif", marginBottom: 20 }}>Learning Made <span style={{ fontWeight: 600, color: "#EA6400" }}>Easy</span></h1>
                    <Row>
                        <div style={{ display: "table", marginLeft: "auto", marginRight: "auto" }}>
                            <a href="https://github.com/mgsium/SolFrontend" target="_blank">
                                <Button className={ cx( Styles.HeaderButton ) }>
                                    <GitHub/>
                                    &nbsp;
                                    Github
                                </Button>
                            </a>
                            <a href="" target="_blank">
                                <Button className={ cx( Styles.HeaderButton ) }>
                                    <LinkIcon/>
                                    &nbsp;
                                    Devpost
                                </Button>
                            </a>
                        </div>
                    </Row>
                </div>
                <Row>
                    <Col md={10}>
                        <Form.Control 
                            id="search-bar"
                            type="text" 
                            size="lg"
                            placeholder="Scan the Matrix..." 
                            className={ cx( Styles.searchBarStyles, (this.props.dark ? Styles.searchBarStylesDark : null), "shadow-sm" ) }
                            onKeyDown={this.performLessonSearch}
                        />
                    </Col>
                    <Col md={2}>
                        {/* TODO: Add an overlay trigger */}
                        <Link to="/editor">
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 150, hide: 100 }}
                                trigger="hover"
                                overlay={(
                                    <Tooltip id="create-lesson-button-tooltip" style={{ fontSize: 18 }}>
                                        Create a Lesson
                                    </Tooltip>
                                )}
                            >   
                                <Button 
                                    variant="success"
                                    className={ cx( Styles.createLessonButtonStyles, (this.props.dark ? Styles.createLessonButtonStylesDark : null), "shadow-sm") }
                                >
                                    <Plus size={48}/>
                                </Button>
                            </OverlayTrigger>
                        </Link>
                    </Col>
                </Row>
                <br/><br/><br/>
                <Row>
                    <Col md={6}>
                        <LessonCard lesson={{
                            id: "hardly-done-here",
                            video_url: "https://www.youtube.com/embed/W7qWa52k-nE",
                            description: "This is a short sample description for this sample lesson on Sol so I can test out how everything looks before I implement it for real.",
                            author_name: "Tyler Durden",
                            more_info: "",
                            header: "How to Learn with Sol",
                            questions: [],
                            timestamp: "Some time here"
                        }}/>
                    </Col>
                    <Col md={6}>
                        <LessonCard lesson={{
                            id: "hardly-done-here",
                            video_url: "https://www.youtube.com/embed/ymgoem4v4u4",
                            description: "This is a short sample description for this sample lesson on Sol so I can test out how everything looks before I implement it for real.",
                            author_name: "Tyler Durden",
                            more_info: "",
                            header: "How (Not) to Become a Space Monkey",
                            questions: [],
                            timestamp: "Some time here"
                        }}/>
                    </Col>
                </Row>
            </Template>
        )
    }

}