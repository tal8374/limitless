import React from 'react';

import './sign-in.css';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import {Link} from "react-router-dom";

const Messages = () => {
    return (
        <Link style={{marginRight:'10px'}} to="sign-in">
                                <span className='link'>
                                    <Icon name='sign-in' size='large'/>
                                    Sign In
                                </span>
        </Link>
    );
};

export default Messages;

