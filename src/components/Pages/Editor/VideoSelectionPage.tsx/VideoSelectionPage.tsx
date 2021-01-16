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

type Props = {
    currentPageIndex: 0 | 1 | 2,
    updatePageIndex: Function,
    confirmVideoUrl: Function
};
type State = {
    videoUrl: string
};

export default class VideoSelectionPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            videoUrl: ""
        }

        // Method Bindings
        this.setVideoUrl = this.setVideoUrl.bind(this);
    }

    setVideoUrl(e: any) {
        this.setState({ videoUrl: e.target.value });
    }

    render() {
        return (
            <div hidden={ this.props.currentPageIndex != 1 }>
                <Col>
                    <Row>
                        <Form.Control 
                            id="lesson-youtube-url"
                            type="text" 
                            size="lg"
                            placeholder="Input Youtube URL..."
                            className={ cx( Styles.URLBarStyles, "shadow-sm" ) }
                            onChange={this.setVideoUrl}
                            style={{ textAlign: "center" }}
                        />
                    </Row>
                    <br/>
                    <ReactPlayer url={ this.state.videoUrl } className={ cx( EditorStyles.videoWrapperSizeModifier, EditorStyles.videoWrapper) } hidden={!this.state.videoUrl}/>
                    <div hidden={!!this.state.videoUrl} className={cx( EditorStyles.videoWrapperSizeModifier )} style={{ background: "rgba(0, 0, 0, 0.05)", borderRadius: 20, height: 400, display: "table", marginLeft: "auto", marginRight: "auto" }}></div>
                    <br/>
                    <Row>
                        <Button variant="success" className={cx( EditorStyles.submitButtonStyles, "shadow-sm" )} onClick={() => { this.props.updatePageIndex(2); this.props.confirmVideoUrl(this.state.videoUrl); }}>
                            <h3 style={{ margin: 0, display: "inline-block" }}>Confirm Video&nbsp;<ArrowRight/></h3>
                        </Button>
                    </Row>

                </Col>
            </div> 
        )
    }

}