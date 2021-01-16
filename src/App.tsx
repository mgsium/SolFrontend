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
                    <Route path="/"                 component={ Home }/>
                    <Route path="/editor"           component={ Editor }/>
                    <Route path="/classroom/:id"    component={ Classroom }/>
                </Switch>
            </BrowserRouter>
        )
    }
}