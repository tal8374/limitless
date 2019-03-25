import React from 'react';

import './about-us.css';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import {Link} from "react-router-dom";

const AboutUs = () => {
    return (
        <Link to="/about-us">
                                <span className='link'>
                                    <Icon name='info circle' size='large'/>
                                    About Us
                                </span>
        </Link>
    );
};

export default AboutUs;
