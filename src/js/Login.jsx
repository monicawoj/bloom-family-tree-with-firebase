import React from "react";
import {Link} from 'react-router-dom';

class Login extends React.Component {
    render() {
        return <div className='login'>
            <div className='container'>
                <h1>watch your family BLOOM</h1>
            </div>
            <div className='container'>
                <section className='add-user'>
                    <form>
                        <input type="text" name="email" placeholder="Email"/>
                        <input type="text" name="password" placeholder="Password"/>
                        <button
                            onClick={this.props.login}
                            className='btn-log-in'>
                            Log In
                        </button>
                        <button className='btn-sign-up'>Sign Up</button>
                        <div className='btn-no-login'>
                            <Link to='/'>Continue without login (limited use)</Link>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    }
}

export default Login;