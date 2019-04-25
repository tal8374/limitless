import React from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";

import './personal-dropdown.css';

import UserImage from "./user-image/user-image";
import {Link} from "react-router-dom";

function getFullName(user) {
    if (user.firstName) {
        let lastName = user.lastName ? user.lastName : '';

        return user.firstName + ' ' + lastName
    } else {
        let email = user.email;
        let emailTitle = email.substring(0, email.indexOf('@'));

        return emailTitle
    }
}

const UserPersonalDropDown = (props) => {


    return (
        <NavDropdown style={{top: '3px'}} eventKey={1}
                     title={
                         <UserImage/>
                     }>
            <NavDropdown.Header
                className='header'>
                Signed up as {getFullName(props.loggedInUser)}
            </NavDropdown.Header>
            <NavDropdown.Divider/>
            <NavDropdown.Item><Link style={{color: 'black', textDecoration: 'none'}} to="/account">Your
                Profile</Link></NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item onClick={props.handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
    );
};

export default UserPersonalDropDown;
