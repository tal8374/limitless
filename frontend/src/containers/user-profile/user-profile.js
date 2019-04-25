import React, {Component} from 'react';
import {fetchUser, showCreateMessageModal, closeCreateMessageModal, sendMessage} from "../../actions";
import {connect} from "react-redux";
import StatusMessage from "../teachers/teachers";
import UserProfile from "../../components/user-profile/user-profile";
import {Modal, Button, Header, Icon} from 'semantic-ui-react'
import MessageModal from "../../components/message-modal/message-modal";

class UserProfileContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showCalendar: props.showCalendar === false ? props.showCalendar : true
        }
    }

    componentDidMount() {
        const {userId} = this.props.match.params;

        this.props.fetchUser(userId);
    }

    render() {
        const {isLoading, error, user} = this.props;

        if (error || !user || isLoading || user.length === 0) {
            return (
                <StatusMessage
                    error={error || !user}
                    errorClassName="users-error"
                    errorMessage={error}
                    loading={isLoading}
                    loadingMessage={`We are fetching the user for you`}
                    nothing={user && user.length === 0}
                    nothingMessage={`No user to display`}
                    nothingClassName="users-error"
                    type="default"
                />
            );
        }

        // if (this.props.isCreateMessageModalOpen) {
        //     return (
        //         <MessageModal user={user} {...this.props}/>
        //     )
        // }

        return (
            <UserProfile showCalendar={true} {...this.props}/>
        );
    }
}

const mapStateToProps = state => ({
    loggedInUser: state.auth.loggedInUser,
    isLoading: state.user.isLoading,
    user: state.user.user,
    error: state.user.error,
    isCreateMessageModalOpen: state.messages.isCreateMessageModalOpen,
});

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => {
        dispatch(fetchUser(userId));
    },
    showCreateMessageModal: () => {
        dispatch(showCreateMessageModal());
    },
    closeCreateMessageModal: () => {
        dispatch(closeCreateMessageModal());
    },
    sendMessage: (body) => {
        dispatch(sendMessage(body));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserProfileContainer);
