import React, {Component} from 'react';
import ConversationList from "../../components/messages/conversation-list/conversation-list";
import MessageList from "../../components/messages/message-list/message-list";
import './messages.css';
import {connect} from "react-redux";
import StatusMessage from "../../components/status-message/status-message";
import {updateMessages, sendMessage} from "../../actions";

class MessagesContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            messages: []
        }
    }

    onUserConversationClicked(user) {
        this.setState({
            user: user,
        });
    }

    render() {

        let {loggedInUser} = this.props;

        if (!loggedInUser) {
            return <StatusMessage
                nothing={!loggedInUser || loggedInUser.message.length === 0}
                nothingMessage={`No messages to display`}
                nothingClassName="users-error"
                type="modal"
            />
        }

        return (
            <div className="messenger" style={{maxHeight: '850px'}}>
                <div className="scrollable sidebar">
                    <ConversationList
                        {...this.props}
                        onUserConversationClicked={this.onUserConversationClicked.bind(this)}
                    />
                </div>

                <div className="scrollable content">
                    <MessageList
                        {...this.props}
                        user={this.state.user}
                        messages={this.state.messages}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedInUser: state.auth.loggedInUser,
});

const mapDispatchToProps = dispatch => ({
    updateMessages: (body) => {
        dispatch(updateMessages(body));
    },
    sendMessage: (body) => {
        dispatch(sendMessage(body));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MessagesContainer);
