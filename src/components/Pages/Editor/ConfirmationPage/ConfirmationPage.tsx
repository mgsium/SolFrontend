import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import Styles from "./ConfirmationPageStyles";
import EditorStyles from "../EditorStyles";

import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

import { ArrowRight, CheckCircle, Clipboard } from "react-feather";
import SectionBody from "../SectionBody/SectionBody";
import SectionHeader from "../SectionHeader/SectionHeader";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



type Props = {
    currentPageIndex: 0 | 1 | 2 | 3,
    updatePageIndex: Function,
    header: string,
    author_name: string,
};
type State = {

};

export default class ConfirmationPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

    }

    render() {
        return (
            <div id="confirmationPage" hidden={ this.props.currentPageIndex != 3 }>
                <h3 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif" }}>Congrats {this.props.author_name}! You've just created the lesson:</h3>

                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">Copy to clipboard</Tooltip>}
                >
                    <div className={cx(Styles.wrapperStyles, "shadow-sm")}>
                        <h2 style={{ margin: 0, textAlign: "center", fontFamily: "Open Sans, sans-serif", fontWeight: "bold", color:"#EA6400" }}>{this.props.header}</h2>
                    </div>
                </OverlayTrigger>
                <br/><br/>

                <CheckCircle style={{ display: "table", marginLeft: "auto", marginRight: "auto", height: "20%", width: "20%", color: "#24292e" }}/>
                <br/><br/>
                
                <Link to="/">
                    <Button variant="success" className={cx( EditorStyles.submitButtonStyles, "shadow-sm" )}>
                        <h3 style={{ margin: 0, display: "inline-block" }}>Return To Homepage&nbsp;<ArrowRight/></h3>
                    </Button>
                </Link>
            </div>
        )
    }

}