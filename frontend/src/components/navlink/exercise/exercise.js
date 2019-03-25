import React from 'react';

import './exercise.css';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import {Link} from "react-router-dom";

const Exercise = () => {
    return (
        <Link style={{marginRight:'10px'}} to="exercises">
                                <span className='link'>
                                    <Icon name='book' size='large'/>
                                    Exercise
                                </span>
        </Link>
    );
};

export default Exercise;
