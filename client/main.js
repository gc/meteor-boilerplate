import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";
import ReactDOM from "react-dom";
import { Tracker } from "meteor/tracker";
import { routes, onAuthChange } from "../imports/routes/routes";
import history from "../imports/history";

import "../imports/startup/simpl-schema-configuration.js";

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById("app"));
});
