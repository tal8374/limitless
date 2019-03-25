import React from 'react';

import './sign-up.css';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <Link to="sign-up">
                                <span className='link sign-up'>
                                    <Icon name='user plus' size='large'/>
                                    Sign Up
                                </span>
        </Link>
    );
};

export default SignUp;
