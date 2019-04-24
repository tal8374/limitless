import React, {Component} from 'react';
import shave from 'shave';

import './conversation-list-item.css';

export default class ConversationListItem extends Component {
    componentDidMount() {
        shave('.conversation-snippet', 20);
    }

    onUserConversationClicked() {
        this.props.onUserConversationClicked(this.props.user);
    }

    getFullName(user) {
        if (user.firstName) {
            let lastName = user.lastName ? user.lastName : '';

            return user.firstName + ' ' + lastName
        } else {
            let email = user.email;
            let emailTitle = email.substring(0, email.indexOf('@'));

            return emailTitle
        }
    }

    render() {
        const {user} = this.props;

        return (
            <div
                className="conversation-list-item"
                style={{cursor: 'pointer'}}
                onClick={this.onUserConversationClicked.bind(this)}
            >
                <img className="conversation-photo" src={user.photo} alt="conversation"/>
                <div className="conversation-info">
                    <h1 className="conversation-title">{this.getFullName(user)}</h1>
                </div>
            </div>
        );
    }
}
