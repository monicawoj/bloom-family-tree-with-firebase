import React, { Component } from 'react';

import { auth } from '../firebase';

const initialState = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...initialState };
    }

    byPropKey = (propertyName, value) => () => ({
        [propertyName]: value,
    });

    onSubmit = (event) => {
        const { passwordOne } = this.state;

        auth.doPasswordUpdate(passwordOne)
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
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '';

        return (
            <form className='passwordChangeForm' onSubmit={this.onSubmit}>
                <input
                    value={passwordOne}
                    onChange={event => this.setState(this.byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="New Password"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(this.byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm New Password"
                />
                <button disabled={isInvalid} type="submit">
                    Reset Password
                </button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

export default PasswordChangeForm;