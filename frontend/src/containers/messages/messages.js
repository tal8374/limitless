import React, {Component} from 'react';
import ConversationList from "../../components/messages/conversation-list/conversation-list";
import MessageList from "../../components/messages/message-list/message-list";
import './messages.css';
import {fetchTeachers} from "../../actions";
import {connect} from "react-redux";
import StatusMessage from "../../components/status-message/status-message";

class MessagesContainer extends Component {
    render() {
        let {loggedInUser} = this.props;

        if(!loggedInUser) {
            return <StatusMessage
                // error={error || !teachers}
                // errorClassName="users-error"
                // errorMessage={error}
                // loading={isLoading}
                // loadingMessage={`We are fetching the teachers for you`}
                nothing={!loggedInUser || loggedInUser.message.length === 0}
                nothingMessage={`No messages to display`}
                nothingClassName="users-error"
                type="modal"
            />
        }

        console.log(loggedInUser)

        return (
            <div className="messenger">
                <div className="scrollable sidebar">
                    <ConversationList
                        {...this.props}
                    />
                </div>

                <div className="scrollable content">
                    <MessageList
                        {...this.props}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // isLoading: state.messages.isLoading,
    // messages: state.messages.messages,
    // error: state.messages.error,
    loggedInUser: state.auth.loggedInUser,
});

const mapDispatchToProps = dispatch => ({
    // fetchMessages: () => {
    //     dispatch(fetchMessages());
    // },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MessagesContainer);
