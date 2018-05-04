import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOut.jsx';
import * as routes from '../constants/routes';

class Navigation extends React.Component {
    render() {
        const {authUser} = this.props;

        return <div className='navigation'>
            { authUser
                ? <NavigationAuth />
                : <NavigationNonAuth />
            }
        </div>
    }
};

const NavigationAuth = () =>
    <ul role='navigation'>
        <li><Link to={routes.overview}>Overview</Link></li>
        <li><Link to={routes.main}>Home</Link></li>
        <li><Link to={routes.account}>Account</Link></li>
        <li><SignOutButton /></li>
    </ul>

const NavigationNonAuth = () =>
    <ul role='navigation'>
        <li><Link to={routes.overview}>Overview</Link></li>
        <li><Link to={routes.signIn}>Sign In</Link></li>
    </ul>

export default Navigation;