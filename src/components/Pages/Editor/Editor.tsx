import React from "react";

import { cx } from "emotion";
import Styles from "./EditorStyles";
import Template from "../Template/Template";
import SectionHeader from "./SectionHeader/SectionHeader";
import Button from "react-bootstrap/esm/Button";
import { Check } from "react-feather";
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
                <h1 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif" }}>Create a Lesson</h1>
                <br/>
                <SectionHeader>Header & Description</SectionHeader>
                <SectionBody>
                    <br/>
                    <h3>Header</h3>
                    {/* TODO: Header Field */}
                    <br/>
                    <h3>Description</h3>
                    {/* TODO: Description Field */}
                    <br/>
                </SectionBody>
                <SectionHeader>Video & Questions</SectionHeader>
                <br/>
                <SectionBody>
                    <br/>
                    <h3>Video</h3>
                    {/* TODO: Video Field */}
                    <br/>
                    <h3>Questions</h3>
                    {/* TODO: Questions */}
                    <br/>
                </SectionBody>
                <SectionHeader>More about you</SectionHeader>
                <br/>
                <SectionBody>
                    <br/>
                    <h3>Your Name (Optional)</h3>
                    {/* TODO: Author Name Field */}
                    <br/>
                    <h3>Additional Details (Optional)</h3>
                    {/* TODO: Additional Details Field */}
                    <br/>
                </SectionBody>
                <br/><br/>
                {/* TODO: Implement Description */}
                <Button variant="success" className={cx( Styles.submitButtonStyles, "shadow-sm" )}>
                    <h3 style={{ margin: 0, display: "inline-block" }}><Check/>&nbsp;Submit</h3>
                </Button>
            </Template>
        )
    }

}