import React, {Component} from 'react';

import './conversation-list.css';

import ConversationSearch from '../conversation-search/conversation-search';
import ConversationListItem from '../conversation-list-item/conversation-list-item';
import Toolbar from '../tool-bar/tool-bar';
import ToolbarButton from '../tool-bar-button/tool-bar-button';
import {Item} from "semantic-ui-react/dist/commonjs/views/Item";

export default class ConversationList extends Component {
    constructor(props) {
        super(props);

        let users = this.getUniqueUsers();

        this.state = {
            conversations: [],
            users
        };
    }

    getUniqueUsers() {
        const users = [];
        const met = [];
        const {loggedInUser} = this.props;

        loggedInUser.messages.forEach(function (message) {
            if (!met.includes(message.by._id) && message.by._id !== loggedInUser._id) {
                met.push(message.by._id);

                users.push(message.by);
            }
        });

        return users;
    }

    onSearchChange(searchUserInput) {
        if (searchUserInput === '') {
            this.setState({
                users: this.getUniqueUsers()
            })
        } else {
            this.setState({
                users: this.getUniqueUsers()
                    .filter(user => (user.firstName && user.firstName.includes(searchUserInput)) ||
                        (user.lastName && user.lastName.includes(searchUserInput)) ||
                        (user.email && user.email.includes(searchUserInput)))
            })
        }
    }

    render() {
        return (
            <div className="conversation-list">
                <Toolbar
                    title="Messenger"
                    leftItems={[
                        <ToolbarButton key="cog" icon="ion-ios-cog"/>
                    ]}
                    rightItems={[
                        <ToolbarButton key="add" icon="ion-ios-add-circle-outline"/>
                    ]}
                />

                <ConversationSearch
                    onSearchChange={this.onSearchChange.bind(this)}
                />
                {
                    this.state.users.map(user =>
                        <ConversationListItem
                            key={user._id}
                            user={user}
                            onUserConversationClicked={this.props.onUserConversationClicked}
                        />
                    )
                }
            </div>
        );
    }
}
