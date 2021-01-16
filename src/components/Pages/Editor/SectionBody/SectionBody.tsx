import React from "react";

type Props = {};
type State = {};

export default class SectionBody extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div style={{ display: "table", marginLeft: "auto", marginRight: "auto", width: "80%", fontFamily: "Roboto, sans-serif", fontWeight: 800 }}>
                {this.props.children}
            </div>
        )
    }
}