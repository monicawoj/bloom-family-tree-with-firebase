import React from 'react';

import PasswordChangeForm from './PasswordChange.jsx';

class Account extends React.Component {
    render() {
        const {authUser} = this.props;

        if (authUser) {
            return <div className='Account' style={{justifyContent:'flex-start', width:'80%'}}>
                <h1>My Account</h1>
                <h2>User: {authUser.email}</h2>
                <PasswordChangeForm />
            </div>
        }
        else {
            return null;
        }
    }
}

export default Account;