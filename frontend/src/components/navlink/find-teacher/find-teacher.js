import React from 'react';

import './find-teacher.css';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import {Link} from "react-router-dom";

const FindTeacher = () => {
    return (
        <Link to="/teachers" style={{marginRight:'10px'}}>
                                <span className='link'>
                                    <Icon name='users' size='large' />
                                    Find Teacher
                                </span>
        </Link>
    );
};

export default FindTeacher;
