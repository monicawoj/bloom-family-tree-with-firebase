import React from 'react';
import { SignUpLink, DemoLink } from './SignUp.jsx';

class Overview extends React.Component {
    render() {
        return <div>
            <h1>How has your family bloomed over the years?</h1>
            <br/>
            <h2>Create your own family</h2>
            <SignUpLink/>
            <h2>See a demo</h2>
            <DemoLink/>
        </div>
    }
}

export default Overview;