import React, {Component} from 'react';

import 'semantic-ui-css/semantic.min.css';

import './App.css';
import HeaderContainer from './containers/header/header';
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import HomeContainer from "./containers/home/home";
import ExercisesContainer from "./containers/excercises/excercises";
import AboutUsContainer from "./containers/about-us/about-us";
import TeachersContainer from "./containers/teachers/teachers";
import AssignmentHelpContainer from "./containers/assignment-help/assignment-help";
import MessagesContainer from "./containers/messages/messages";
import UserTeachersContainer from "./containers/user-teachers/user-teachers";
import UserStudentsContainer from "./containers/user-students/user-students";
import UserSettingContainer from "./containers/user-setting/user-setting";
import UserProfileContainer from "./containers/user-profile/user-profile";
import Login from "./components/login/login";
import Register from "./components/register/register";

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <HeaderContainer/>
                <Route exact path='/' component={HomeContainer}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/about-us' component={AboutUsContainer}/>
                <Route exact path='/assignment-help' component={AssignmentHelpContainer}/>
                <Route exact path='/exercises' component={ExercisesContainer}/>
                <Route exact path='/teachers' component={TeachersContainer}/>
                <Route exact path='/messages' component={MessagesContainer}/>
                <Route exact path='/user-profile' component={UserProfileContainer}/>
                <Route exact path='/user-teachers' component={UserTeachersContainer}/>
                <Route exact path='/user-students' component={UserStudentsContainer}/>
                <Route exact path='/user-setting' component={UserSettingContainer}/>
            </BrowserRouter>


        );
    }
}

export default App;
