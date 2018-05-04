import React, { Component } from 'react';
import { Link, withRouter,} from 'react-router-dom';
import { auth, db } from '../firebase';
import { blankData } from './blankData.jsx';

import * as routes from '../constants/routes';

class SignUpPage extends React.Component {
    render() {
        return <div className='SignUpPage'>
            <h1>SignUp</h1>
            <SignUpForm history={this.props.history}/>
            <DemoLink/>
        </div>
    }
}

const initialState = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    data: blankData,
    error: null,
};

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
        };
    }

    onSubmit = (event) => {
        const {username, email, passwordOne, data} = this.state;

        const {history} = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                db.doCreateUser(authUser.uid, username, email, data)
                    .then(() => {
                        this.setState(() => ({ ...initialState }));
                        history.push(routes.main);
                    })
                    .catch(error => {
                        this.setState(this.byPropKey('error', error));
                    });
            })
            .catch(error => {
                this.setState(this.byPropKey('error', error));
            });

        event.preventDefault();
    };

    byPropKey = (propertyName, value) => ({[propertyName]: value,});

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={username}
                    onChange={event => this.setState(this.byPropKey('username', event.target.value))}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    value={email}
                    onChange={event => this.setState(this.byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={passwordOne}
                    onChange={event => this.setState(this.byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(this.byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

class SignUpLink extends React.Component {
    render() {
        return <p>
            Don't have an account?
            {' '}
            <Link to={routes.signUp}>Sign Up</Link>
        </p>
    }
}

class DemoLink extends React.Component {
    render() {
        return <p>
            <Link to="/main">Continue as guest</Link>
            (limited functionality)
        </p>
    }
}


export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
    DemoLink,
};