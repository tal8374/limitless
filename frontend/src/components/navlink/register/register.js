import React from 'react';

import './register.css';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <Link to="register">
                                <span className='link sign-up'>
                                    <Icon name='user plus' size='large'/>
                                    Register
                                </span>
        </Link>
    );
};

export default Register;
