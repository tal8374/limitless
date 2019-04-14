import React, {Component} from 'react';
import {fetchUser} from "../../actions";
import {connect} from "react-redux";
import StatusMessage from "../teachers/teachers";
import UserProfile from "../../components/user-profile/user-profile";

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

        return (
            <UserProfile showCalendar={true} {...this.props}/>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.user.isLoading,
    user: state.user.user,
    error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => {
        dispatch(fetchUser(userId));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserProfileContainer);
