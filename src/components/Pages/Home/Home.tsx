import React from "react";

import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { cx } from "emotion";
import Styles from "./HomeStyles";
import Template from "../Template/Template";
import Col from "react-bootstrap/esm/Col";

import { GitHub, Heart, Link, Plus, Search } from "react-feather";
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
                            <Button className={ cx( Styles.HeaderButton ) }>
                                <GitHub/>
                                &nbsp;
                                Github
                            </Button>
                            <Button className={ cx( Styles.HeaderButton ) }>
                                <Link/>
                                &nbsp;
                                Devpost
                            </Button>
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
                    </Col>
                </Row>
                <br/><br/><br/>
                <Row>
                    <Col md={6}>
                        <LessonCard/>
                    </Col>
                    <Col md={6}>
                        <LessonCard/>
                    </Col>
                </Row>
                <br/><br/><br/>
                <Row style={{ padding: 15, paddingBottom: 8 }}>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <small style={{ fontFamily: "Roboto, sans-serif", fontSize: 18 }}>Made with <FontAwesomeIcon color="red" icon={faHeart}/> in the UK</small>
                    </div>
                </Row>
                <Row style={{ padding: 15, paddingTop: 8 }}>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <small style={{ fontFamily: "Roboto, sans-serif" }}>2021 Musab Guma'a & Mustafa Choudhry</small>
                    </div>
                </Row>
            </Template>
        )
    }

}