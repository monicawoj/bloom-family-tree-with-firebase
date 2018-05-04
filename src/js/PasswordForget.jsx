import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

class PasswordForget extends React.Component {
    render() {
        return <div className='PasswordForgetPage'>
            <h1>PasswordForget</h1>
            <PasswordForgetForm />
        </div>
    }
}

const initialState = {
    email: '',
    error: null,
};

class PasswordForgetForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...initialState };
    }

    byPropKey = (propertyName, value) => () => ({
        [propertyName]: value,
    });

    onSubmit = (event) => {
        const { email } = this.state;

        auth.doPasswordReset(email)
            .then(() => {
                this.setState(() => ({ ...initialState }));
            })
            .catch(error => {
                this.setState(this.byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            error,
        } = this.state;

        const isInvalid = email === '';

        return (
            <form className='passwordForgetForm' onSubmit={this.onSubmit}>
                <input
                    value={email}
                    onChange={event => this.setState(this.byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <button disabled={isInvalid} type="submit">
                    Reset Password
                </button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

const PasswordForgetLink = () =>
    <p>
        <Link to="/pw-forget">Forgot Password?</Link>
    </p>

export default PasswordForget;

export {
    PasswordForgetForm,
    PasswordForgetLink,
};