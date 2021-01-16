import React from "react";

import Container from "react-bootstrap/Container";

import { cx } from "emotion";
import Styles from "./TemplateBodyStyles";

import Navbar from "react-bootstrap/Navbar";

type Props = {};
type State = {};

export default class TemplateBody extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container>
                    <br/>
                    {this.props.children}
                </Container>
            </>
        )
    }
}