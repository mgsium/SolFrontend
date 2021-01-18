import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Classroom from "./components/Pages/Classroom/Classroom";
import Editor from "./components/Pages/Editor/Editor";
import Home from "./components/Pages/Home/Home";

type State = {};
type Props = {
    dark: boolean
};

export default class App extends React.Component<Props, State> {

    componentDidUpdate() {
        const favicon = document.getElementById("favicon");
        console.log("SHUAIDHIUASHDUAS");

        if (this.props.dark == true) {
            favicon.setAttribute("href", "/public/SolLogoDark.ico")
        } else {
            favicon.setAttribute("href", "/public/SolLogo.ico")
        }

    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"                       component={ Home }/>
                    <Route path="/editor"                       component={ Editor }/>
                    <Route path="/classroom/:id"                component={ Classroom }/>
                </Switch>
            </BrowserRouter>
        )
    }
}