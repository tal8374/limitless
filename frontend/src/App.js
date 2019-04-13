import React, {Component} from 'react';

import 'semantic-ui-css/semantic.min.css';

import './App.css';
import HeaderContainer from './containers/header/header';
import {BrowserRouter, Redirect, Switch} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import ExercisesContainer from "./containers/excercises/excercises";
import AboutUsContainer from "./components/about-us/about-us";
import TeachersContainer from "./containers/teachers/teachers";
import AssignmentHelpContainer from "./containers/assignment-help/assignment-help";
import MessagesContainer from "./containers/messages/messages";
import AccountContainer from "./containers/account/account";
import Login from "./components/login/login";
import Register from "./components/register/register";
import UserProfileContainer from "./containers/user-profile/user-profile";
import Provider from "react-redux/es/components/Provider";
import store, {persistor} from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <HeaderContainer/>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/register' component={Register}/>
                        <Route exact path='/about-us' component={AboutUsContainer}/>
                        <Route exact path='/assignment-help' component={AssignmentHelpContainer}/>
                        <Route exact path='/exercises' component={ExercisesContainer}/>
                        <Route exact path='/teachers' component={TeachersContainer}/>
                        <Route exact path='/messages' component={MessagesContainer}/>
                        <Route exact path='/account' component={AccountContainer}/>
                        <Route exact path='/profile/:userId' component={UserProfileContainer}/>
                        <Redirect from='*' to='/teachers'/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
