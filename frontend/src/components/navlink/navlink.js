import React, {Component} from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

import './navlink.css';

import Logo from "./logo/logo";
import FindTeacher from "./find-teacher/find-teacher";
import AboutUs from "./about-us/about-us";
import Exercise from "./exercise/exercise";
import Login from "./login/login";
import Register from "./register/register";
import Messages from "./messages/messages";
import UserPersonalDropDown from "./personal-dropdown/personal-dropdown";

const Navlink = (props) => {
    return (
        <Navbar style={{paddingTop: '17px', paddingBottom: '17px'}} bg="dark" variant="dark" expand="md">
            <Col xs={2} md={2}/>
            <Col xs={8} md={8}>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Logo/>
                    <Nav className="mr-auto">

                        <FindTeacher/>
                        <Exercise/>
                        <AboutUs/>

                    </Nav>
                    <Nav>
                        {!props.loggedInUser ? <Login/> : null}
                        {!props.loggedInUser ? <Register/> : null}

                        {props.loggedInUser ? <Messages {...props}/> : null}
                        {props.loggedInUser ?
                            <UserPersonalDropDown {...props} handleLogout={props.handleLogout}/> : null}
                    </Nav>
                </Navbar.Collapse>
            </Col>
            <Col xs={2} md={2}/>
        </Navbar>
    );
}

export default Navlink;
