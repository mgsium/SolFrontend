import * as React from "react";
import * as ReactDOM from "react-dom";

import * as WebFont from "webfontloader";

import App from "./app";

WebFont.load({
    google: {
        families: ["Open Sans", "Roboto", "Space Mono"]
    }
})

ReactDOM.render(
    <App dark={true}/>,
    document.getElementById("app")
)