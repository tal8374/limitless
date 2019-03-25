import React from 'react';

import './login.css';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <Link style={{marginRight:'10px'}} to="login">
                                <span className='link'>
                                    <Icon name='sign-in' size='large'/>
                                    Login
                                </span>
        </Link>
    );
};

export default Login;

