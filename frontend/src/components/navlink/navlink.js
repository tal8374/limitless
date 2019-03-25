import React, {Component} from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

import './navlink.css';

import Logo from "./logo/logo";
import SignIn from "./sign-in/sign-in";
import SignUp from "./sign-up/sign-up";
import FindTeacher from "./find-teacher/find-teacher";
import AssignmentHelp from "./assignment-help/assignment-help";
import AboutUs from "./about-us/about-us";
import Messages from "./messages/messages";
import UserPersonalDropDown from "./personal-dropdown/personal-dropdown";
import Exercise from "./exercise/exercise";

class Navlink extends Component {
    render() {
        return (
            <Navbar style={{paddingTop: '17px', paddingBottom: '17px'}} bg="dark" variant="dark" expand="md">
                <Col xs={2} md={2}/>
                <Col xs={8} md={8}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Logo />
                        <Nav className="mr-auto">

                            <FindTeacher/>
                            <AssignmentHelp/>
                            <Exercise/>
                            <AboutUs/>

                        </Nav>
                        <Nav>

                            {/*<SignIn/>*/}
                            {/*<SignUp/>*/}

                            <Messages/>
                            <UserPersonalDropDown/>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
                <Col xs={2} md={2}/>
            </Navbar>
        );
    }
}

export default Navlink;
