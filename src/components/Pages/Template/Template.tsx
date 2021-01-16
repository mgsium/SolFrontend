import React from "react";

import Navbar from "react-bootstrap/Navbar";

import { cx } from "emotion";
import Styles from "./TemplateStyles";
import TemplateNavbar from "./TemplateNavbar/TemplateNavbar";
import TemplateBody from "./TemplateBody/TemplateBody";

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
                </TemplateBody>
            </>
        )
    }

}