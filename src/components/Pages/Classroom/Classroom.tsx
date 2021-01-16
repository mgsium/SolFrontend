import React from "react";

import { cx } from "emotion";
import Styles from "./ClassroomStyles";
import Template from "../Template/Template";

type Props = {};
type State = {};

export default class Classroom extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                <h1>Classroom</h1>
            </Template>
        )
    }

}