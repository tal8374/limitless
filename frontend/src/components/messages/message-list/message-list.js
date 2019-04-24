import React, {Component} from 'react';
import Compose from '../compose/compose';
import Toolbar from '../tool-bar/tool-bar';
import ToolbarButton from '../tool-bar-button/tool-bar-button';
import Message from '../message/message';
import moment from 'moment';

import './message-list.css';
import StatusMessage from "../../status-message/status-message";

export default class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    getFullName(user) {
        if (!user) {
            return '';
        }

        if (user.firstName) {
            let lastName = user.lastName ? user.lastName : '';

            return user.firstName + ' ' + lastName
        } else {
            let email = user.email;
            let emailTitle = email.substring(0, email.indexOf('@'));

            return emailTitle
        }
    }

    getTimeStamp(_id) {
        let timestamp = _id.toString().substring(0, 8)

        return moment(new Date(parseInt(timestamp, 16) * 1000));
    }

    updateReadTime(messages) {
        if(!this.isUnreadMessages(messages)) {
            return;
        }

        this.props.updateMessages({
            messagesId: messages.map(message => message._id),
            readAtForUser: new Date()
        });
    }

    isUnreadMessages(messages) {
        return messages.filter(message => message.readAtForUser === undefined).length > 0;
    }

    renderMessages() {
        let { user } = this.props;

        if(!user) return;

        let messages = this.props.loggedInUser.messages.filter(message => message.for._id === user._id ||  message.by._id === user._id);

        this.updateReadTime(messages);

        let messageElements = [];

        let i = 0;
        let messageCount = messages.length;

        while (i < messageCount) {
            let previous = messages[i - 1];
            let current = messages[i];
            let next = messages[i + 1];
            let isMine = current.by._id === this.props.user._id;

            let currentMoment = this.getTimeStamp(current._id);
            let prevBySameAuthor = false;
            let nextBySameAuthor = false;
            let startsSequence = true;
            let endsSequence = true;
            let showTimestamp = true;

            if (previous) {
                let previousMoment = this.getTimeStamp(previous._id);
                let previousDuration = moment.duration(currentMoment.diff(previousMoment));
                prevBySameAuthor = previous._id === current._id;

                if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                    startsSequence = false;
                }

                if (previousDuration.as('hours') < 1) {
                    showTimestamp = false;
                }
            }

            if (next) {
                let nextMoment = this.getTimeStamp(next._id);
                let nextDuration = moment.duration(nextMoment.diff(currentMoment));
                nextBySameAuthor = next._id === current._id;

                if (nextBySameAuthor && nextDuration.as('hours') < 1) {
                    endsSequence = false;
                }
            }

            messageElements.push(
                <Message
                    key={current._id}
                    isMine={isMine}
                    startsSequence={startsSequence}
                    endsSequence={endsSequence}
                    showTimestamp={showTimestamp}
                    data={current}
                    getTimeStamp={this.getTimeStamp}
                />
            );

            i += 1;
        }

        return messageElements;
    }

    render() {
        const {user} = this.props;

        if (!user) {
            return <StatusMessage
                type="regular"
                message='Please pick a user to show his messages'
                header='No Messages'
            />
        }

        return (
            <div className="message-list">
                <Toolbar
                    title={this.getFullName(user)}
                    rightItems={[
                        <ToolbarButton key="info" icon="ion-ios-information-circle-outline"/>,
                        <ToolbarButton key="video" icon="ion-ios-videocam"/>,
                        <ToolbarButton key="phone" icon="ion-ios-call"/>
                    ]}
                />

                <div className="message-list-container">{this.renderMessages()}</div>

                <Compose
                    {...this.props}
                    user={user}
                    rightItems={[
                    <ToolbarButton key="photo" icon="ion-ios-camera"/>,
                    <ToolbarButton key="image" icon="ion-ios-image"/>,
                    <ToolbarButton key="audio" icon="ion-ios-mic"/>,
                    <ToolbarButton key="money" icon="ion-ios-card"/>,
                    <ToolbarButton key="games" icon="ion-logo-game-controller-b"/>,
                    <ToolbarButton key="emoji" icon="ion-ios-happy"/>
                ]}/>
            </div>
        );
    }
}
