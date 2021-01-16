import React from "react";

import { cx } from "emotion";
import Styles from "./EditorStyles";
import Template from "../Template/Template";

type Props = {};
type State = {};

export default class Editor extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                <h1>Editor</h1>
            </Template>
        )
    }

}