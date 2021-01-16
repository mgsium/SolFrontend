import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Classroom from "./components/Pages/Classroom/Classroom";
import Editor from "./components/Pages/Editor/Editor";
import Home from "./components/Pages/Home/Home";

type State = {};
type Props = {};

export default class App extends React.Component<Props, State> {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"                   component={ Editor }/>
                    <Route path="/editor"                   component={ Classroom }/>
                    <Route path="/classroom"                component={ Home }/>
                </Switch>
            </BrowserRouter>
        )
    }
}