import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PasswordForgetLink } from "./PasswordForget.jsx";
import { SignUpLink } from './SignUp.jsx';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

class SignInPage extends React.Component {
     render() {
         return <div className='SignInPage'>
             <h1>SignIn</h1>
             <SignInForm history={this.props.history} />
             <PasswordForgetLink/>
             <SignUpLink />
         </div>
     }
}

const initialState = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...initialState };
    }

    byPropKey = (propertyName, value) => () => ({
        [propertyName]: value,
    });

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState(() => ({ ...initialState }));
                history.push(routes.main);
            })
            .catch(error => {
                this.setState(this.byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <form className='signIn' onSubmit={this.onSubmit}>
                <input
                    value={email}
                    onChange={event => this.setState(this.byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={password}
                    onChange={event => this.setState(this.byPropKey('password', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign In
                </button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};