import React from "react";

import Row from "react-bootstrap/Row";

import { cx } from "emotion";
import Styles from "./TemplateStyles";
import TemplateNavbar from "./TemplateNavbar/TemplateNavbar";
import TemplateBody from "./TemplateBody/TemplateBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

type Props = {};
type State = {};

export default class Template extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <TemplateNavbar/>
                <TemplateBody>
                    {this.props.children}
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
                </TemplateBody>
            </>
        )
    }

}