import React from 'react';

import './assignment-help.css';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import {Link} from "react-router-dom";

const AssignmentHelp = () => {
    return (
        <Link style={{marginRight:'10px', marginLeft:'10px'}} to="assignment-help">
                                <span className='link'>
                                    <Icon name='searchengin' size='large'/>
                                    Assignment Help
                                </span>
        </Link>
    );
};

export default AssignmentHelp;
