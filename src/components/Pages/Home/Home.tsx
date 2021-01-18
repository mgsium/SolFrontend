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

import { FileText, GitHub, Heart, Link as LinkIcon, Plus, Search } from "react-feather";
import LessonCard from "../LessonCard/LessonCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import LessonStructureMap from "../../../helpers/LessonStructureMap";
import LessonSwitch from "../../../httpclient/LessonSwitch";

import $ from "jquery";

type Props = {
    performLessonSearch: Function,
    dark: boolean
};
type State = {
    lessonStructureMap: LessonStructureMap
};

export default class Home extends React.Component<Props, State> {

    private static MAX_RESULTS = 20;

    constructor(props: Props) {
        super(props);

        this.state = {
            lessonStructureMap: new LessonStructureMap()
        }

        // Method Bindings
        this.performRandomLessonSearch = this.performRandomLessonSearch.bind(this);
        this.performKeywordLessonSearch = this.performKeywordLessonSearch.bind(this);
    }

    componentDidMount() {
        // Preprocessing
        this.performRandomLessonSearch();

        $(window).on("scroll", () => {
            var scrollHeight = $(document).height();
            var scrollPos = $(window).height() + $(window).scrollTop();
            // @ts-ignore
            if ((scrollHeight as number - Math.floor(scrollPos)) / scrollHeight as number == 0) {
                this.performRandomLessonSearch();
            }
        });
    }


    performRandomLessonSearch() {
        LessonSwitch.getRandomLessons(Home.MAX_RESULTS, this);
    }

    performKeywordLessonSearch(e: any) {
        const searchString: string = e.target.value;
        if(e.key == 'Enter' && searchString) {
            LessonSwitch.searchForLessons(searchString, this);
        }
    }

    render() {
        return (
            <Template>
                <div style={{ textAlign: "center", margin: "50px 0px" }}>
                    <h1 style={{ fontFamily: "Open Sans, sans-serif", marginBottom: 20 }}>Learning Made <span style={{ fontWeight: 600, color: "#EA6400" }}>Easy</span></h1>
                    <Row>
                        <div style={{ display: "table", marginLeft: "auto", marginRight: "auto" }}>
                            <Link to="/about">
                                <Button className={ cx( Styles.HeaderButton ) }>
                                    <FileText/>
                                    &nbsp;
                                    About
                                </Button>
                            </Link>
                            <a href="https://github.com/mgsium/SolFrontend" target="_blank">
                                <Button className={ cx( Styles.HeaderButton ) }>
                                    <GitHub/>
                                    &nbsp;
                                    Github
                                </Button>
                            </a>
                            <a href="https://devpost.com/software/sol-learning-made-easy-learntosol-com" target="_blank">
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
                            onKeyPress={this.performKeywordLessonSearch}
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
                <Row id="lessonboard">
                    <Col md={6}>
                        {this.state.lessonStructureMap.getColumnOneLessonWidgets()}
                    </Col>
                    <Col md={6}>
                        {this.state.lessonStructureMap.getColumnTwoLessonWidgets()}
                    </Col>
                </Row>
                <br/><br/><br/><br/><br/><br/>
            </Template>
        )
    }

}