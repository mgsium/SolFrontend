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
import InitialDetailPage from "./InitialDetailPage/InitialDetailPage";
import VideoSelectionPage from "./VideoSelectionPage.tsx/VideoSelectionPage";
import LessonBuilder from "./LessonBuilder";

type Props = {};
type State = {
    showingLessonPage: boolean,
    currentPageIndex: 0 | 1 | 2 ,
    lessonBuilder: LessonBuilder
};


export default class Editor extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            lessonBuilder: new LessonBuilder(),
            showingLessonPage: false,
            currentPageIndex: 0
        };

        // Method Bindings
        this.confirmInitialDetails = this.confirmInitialDetails.bind(this);
        this.confirmVideoUrl = this.confirmVideoUrl.bind(this);
        this.updatePageIndex = this.updatePageIndex.bind(this);
    }

    confirmInitialDetails(header: string, description: string, author_name: string, more_info: string) {
        const lessonBuilder: LessonBuilder = this.state.lessonBuilder;
        lessonBuilder.setHeader(header);
        lessonBuilder.setDescription(description);
        lessonBuilder.setAuthorName(author_name);
        lessonBuilder.setMoreInfo(more_info);
        this.setState({ lessonBuilder: lessonBuilder });
    }

    confirmVideoUrl(url: string) {
        const lessonBuilder: LessonBuilder = this.state.lessonBuilder;
        lessonBuilder.setVideoUrl(url);
        this.setState({ lessonBuilder: lessonBuilder });
    }

    updatePageIndex(index: 0 | 1 | 2) {
        this.setState({ currentPageIndex: index });
    }

    render() {
        return (
            <Template>
                    <InitialDetailPage 
                        currentPageIndex={this.state.currentPageIndex} 
                        confirmInitialDetails={this.confirmInitialDetails}
                        updatePageIndex={this.updatePageIndex}
                    />
                    <VideoSelectionPage
                        currentPageIndex={this.state.currentPageIndex}
                        updatePageIndex={this.updatePageIndex}
                        confirmVideoUrl={this.confirmVideoUrl}
                    />
            </Template>
        )
    }

}