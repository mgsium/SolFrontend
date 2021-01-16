import React from "react";

import { cx } from "emotion";
import Styles from "./SectionHeaderStyles";

type Props = {};
type State = {}

export default class SectionHeader extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={cx(Styles.wrapperStyles, "shadow-sm")}>
                <h2 style={{ margin: 0, textAlign: "center", fontFamily: "Open Sans, sans-serif" }}>{this.props.children}</h2>
            </div>
        )
    }

}
