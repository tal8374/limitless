import React, {Component} from 'react'
import {Item} from 'semantic-ui-react'
import Profile from "../profile/profile";
import StatusMessage from "../status-message/status-message";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    getProfile(user) {
        if (this.props.profile) {
            return this.props.profile;
        }

        if (user.roles.includes('teacher')) {
            return 'teacher';
        }

        if (user.roles.includes('student')) {
            return 'student';
        }
    }

    getUsers() {
        if (!this.props.users) return null;

        let filtered = this.props.users.slice(this.props.getToSkip(), this.props.getToSkip() + this.props.getToLimit());

        filtered = filtered.map((user) => (
            <Profile key={user._id} user={user} profile={this.getProfile(user)}/>
        ));

        return filtered
    }

    render() {
        const {isLoading, error, users} = this.props;

        if (error || !users || users.length === 0) {
            return (
                <StatusMessage
                    error={error || !users}
                    errorClassName="users-error"
                    errorMessage={error}
                    loading={isLoading}
                    loadingMessage={`We are fetching the data for you`}
                    nothing={users && users.length === 0}
                    nothingMessage={`No data to display`}
                    nothingClassName="users-error"
                    type="default"
                />
            );
        }

        return (
            <Item.Group divided>
                {this.getUsers()}
            </Item.Group>
        )
    }
}

export default Users
