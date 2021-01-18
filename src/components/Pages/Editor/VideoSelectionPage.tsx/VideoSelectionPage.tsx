import React from "react";

import { cx } from "emotion";
import Styles from "./VideoSelectionPageStyles";
import EditorStyles from "../EditorStyles";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import { ArrowRight } from "react-feather";
import ReactPlayer from "react-player";

import $ from "jquery";

type Props = {
    currentPageIndex: 0 | 1 | 2 | 3,
    updatePageIndex: Function,
    confirmVideoUrl: Function
};
type State = {
    videoUrl: string,
    playing: boolean,
    vidPlaying: boolean
};

export default class VideoSelectionPage extends React.Component<Props, State> {

    buttonDisabled: boolean = true;

    constructor(props: Props) {
        super(props);

        this.state = {
            videoUrl: "",
            playing: false,
            vidPlaying: false
        }

        // Method Bindings
        this.setVideoUrl = this.setVideoUrl.bind(this);
    }

    setVideoUrl(e: any) {
        this.setState({ videoUrl: e.target.value });
    }

    checkURL(e: string) {
        if (ReactPlayer.canPlay(e) == true) {
            this.buttonDisabled = false
        } 

        else {
            this.buttonDisabled = true
        }
    }

    stopVid() {
        if (this.state.vidPlaying == true) {
            this.setState({ playing: true }, () => {this.setState({ playing:false })});
        }
    }

    setVidPlayingTrue() {
        this.setState({ vidPlaying:  true})
    }

    setVidPlayingFalse() {
        this.setState({ vidPlaying:  false})
    }

    render() {
        return (
            <div hidden={ this.props.currentPageIndex != 1 }>
                <h1 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif" }}>Choose a Video</h1>
                <br/>
                <Col>
                    <Row>
                        <Form.Control 
                            id="lesson-youtube-url"
                            type="text" 
                            size="lg"
                            placeholder="Paste Youtube URL..."
                            className={ cx( Styles.URLBarStyles, "shadow-sm" ) }
                            onChange={(e) => {this.setVideoUrl(e); this.checkURL(e.target.value)}}
                            style={{ textAlign: "center" }}
                        />
                    </Row>
                    <br/>
                    <div style={{ width: "100%", maxWidth: 800, display: "table", marginLeft: "auto", marginRight: "auto" }}>
                        <div style={{ position: "relative", paddingTop: "56.25%" }}>
                            <ReactPlayer url={ this.state.videoUrl } playing={this.state.playing} onPlay={() => { this.setVidPlayingTrue() }} onPause={() => { this.setVidPlayingFalse() }} className={ cx( EditorStyles.videoWrapperSizeModifier, EditorStyles.videoWrapper) } hidden={!this.state.videoUrl} width="100%" height="100%"/>
                        </div>
                    </div>
                    <div hidden={!!this.state.videoUrl} className={cx( EditorStyles.videoWrapperSizeModifier )} style={{ background: "rgba(0, 0, 0, 0.05)", borderRadius: 20, height: 400, display: "table", marginLeft: "auto", marginRight: "auto" }}></div>
                    <br/>
                    <Row>
                        <Button variant="success" disabled={this.buttonDisabled} className={cx( EditorStyles.submitButtonStyles, "shadow-sm" )} onClick={() => { this.stopVid(); this.props.updatePageIndex(2); this.props.confirmVideoUrl(this.state.videoUrl) }}>
                            <h3 style={{ margin: 0, display: "inline-block" }}>Confirm Video&nbsp;<ArrowRight/></h3>
                        </Button>
                    </Row>
                </Col>
            </div> 
        )
    }

}