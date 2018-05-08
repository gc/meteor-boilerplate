import { Meteor } from "meteor/meteor";
import React from "react";
import { Router, Switch, Route, withRouter } from "react-router-dom";
import history from "../history";
import Signup from "../ui/Signup";
import DashBoard from "../ui/DashBoard";
import NotFound from "../ui/NotFound";
import Login from "../ui/Login";

const unauthenticatedPages = ["/", "/signup"];
const authenticatedPages = ["/dashboard"];

const onEnterPublicPage = () => {
    if (Meteor.userId()) history.replace("/dashboard");
};

const onEnterPrivatePage = () => {
    if (!Meteor.userId()) history.replace("/");
};

export const onAuthChange = isAuthenticated => {
    const pathname = history.location.pathname;
    const isUnAuthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    if (isUnAuthenticatedPage && isAuthenticated) {
        history.replace("/dashboard");
    } else if (isAuthenticatedPage && !isAuthenticated) {
        history.replace("/");
    }
};

export const routes = (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Login} onEnter={onEnterPublicPage} />
            <Route exact path="/signup" component={Signup} onEnter={onEnterPublicPage} />
            <Route exact path="/dashboard" component={DashBoard} onEnter={onEnterPrivatePage} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);
