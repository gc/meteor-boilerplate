import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <h1>Page Not Found</h1>
                <p>That page does not exist.</p>
                <Link to="/" className="button button--link">
                    Head Home
                </Link>
            </div>
        </div>
    );
};
