import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {firebase} from '../firebase/index.js';
import MainHeader from './MainHeader.jsx';
import NotFound from './NotFound.jsx';
import Overview from './Overview.jsx';
import SignUpPage from './SignUp.jsx';
import SignInPage from './SignIn.jsx';
import PasswordForget from './PasswordForget.jsx';
import Account from './Account.jsx';
import Main from './Main.jsx';

import * as routes from '../constants/routes';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser : null,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
        };
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState(() => ({ authUser }))
                : this.setState(() => ({ authUser: null }));
        });

        window.addEventListener('resize', this.onResize, false);
        this.onResize();
    }

    onResize = () => {
        this.setState({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
        });
    };

    render() {
        const {authUser, screenWidth, screenHeight} = this.state;

        return <HashRouter>
            <div>
                <MainHeader
                    authUser={authUser}
                    size={[screenWidth, screenHeight*0.1]}/>

                <Switch>
                    <Route
                        exact path={routes.overview}
                        component={() => <Overview size={[screenWidth, screenHeight*0.1]}/>}
                    />
                    <Route
                        exact path={routes.signUp}
                        component={() => <SignUpPage/>}
                    />
                    <Route
                        exact path={routes.signIn}
                        component={() => <SignInPage/>}
                    />
                    <Route
                        exact path={routes.passwordForget}
                        component={() => <PasswordForget authUser={authUser}/>}
                    />
                    <Route
                        exact path={routes.main}
                        component={() => <Main
                            screenWidth={screenWidth}
                            screenHeight={screenHeight}
                            onResize={this.onResize}
                            authUser={authUser}/>}
                    />
                    <Route
                        exact path={routes.account}
                        component={() => <Account authUser={authUser}/>}
                    />
                    <Route
                        path={routes.notFound}
                        component={() => <NotFound />}
                    />
                </Switch>
            </div>
        </HashRouter>
    }
}

export default App;