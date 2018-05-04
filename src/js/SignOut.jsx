import React from 'react';
import {Link} from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from "../constants/routes";

class SignOutButton extends React.Component {
    render() {
        return <button
            type="button">
            <Link className='signOut' to={routes.overview} onClick={auth.doSignOut}>Sign Out</Link>
        </button>
    }
}

export default SignOutButton;