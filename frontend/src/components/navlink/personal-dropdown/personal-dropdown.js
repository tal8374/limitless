import React from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";

import './personal-dropdown.css';

import UserImage from "./user-image/user-image";
import {Link} from "react-router-dom";


const UserPersonalDropDown = () => {
    return (
        <NavDropdown style={{top: '3px'}} eventKey={1}
                     title={
                         <UserImage/>
                     }>
            <NavDropdown.Header className='header' href="#action/3.4">Signed up as name</NavDropdown.Header>
            <NavDropdown.Divider/>
            <NavDropdown.Item><Link style={{color: 'black',textDecoration: 'none'}}  to="user-profile">Your profile</Link></NavDropdown.Item>
            <NavDropdown.Item><Link style={{color: 'black',textDecoration: 'none'}} to="user-teachers">Your teachers</Link></NavDropdown.Item>
            <NavDropdown.Item><Link style={{color: 'black',textDecoration: 'none'}}  to="user-students">Your students</Link></NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item><Link style={{color: 'black',textDecoration: 'none'}} to="user-setting">Setting</Link></NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item>Logout</NavDropdown.Item>
        </NavDropdown>
    );
};

export default UserPersonalDropDown;
