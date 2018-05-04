import React from "react";
import {Link} from "react-router-dom";
import * as routes from '../constants/routes';

class NotFound extends React.Component {
    render() {
        return <div>
            <h1>404</h1>
            <h2>Sorry, no page exists at this URL. Looking for Bloom Family Tree Creator? Try <Link to={routes.overview}>this</Link> instead!</h2>
        </div>;
    }
}

export default NotFound;