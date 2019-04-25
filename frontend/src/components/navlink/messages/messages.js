import React from 'react';
import './messages.css';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import {Link} from "react-router-dom";

const Messages = (props) => {
    function getNumberOfUnReadConversations() {
        let loggedInUser = props.loggedInUser;

        return props.loggedInUser.messages
            .filter(message => message.readAtForUser === undefined &&
                message.for._id === loggedInUser._id).length;
    }

    return (
        <Link style={{marginRight: '7px'}} to="/messages">
            <NotificationBadge
                style={{marginTop: "5px"}}
                count={getNumberOfUnReadConversations()}
                effect={Effect.SCALE}
            />

            <span style={{marginLeft: "-1px"}} className='link messages'>
                                    <Icon style={{marginTop: "-60px"}} name='envelope' size='large'>
                                    </Icon>
                                </span>
        </Link>
    );
};

export default Messages;
