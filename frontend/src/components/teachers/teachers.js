import React, {Component} from 'react'
import {Item} from 'semantic-ui-react'
import Profile from "../profile/profile";
import StatusMessage from "../status-message/status-message";

class Teachers extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    getTeachers() {
        let filtered = this.props.users.slice(this.props.getToSkip(), this.props.getToSkip() + this.props.getToLimit());

        filtered = filtered.map((teacher) => (
            <Profile key={teacher.key} user={teacher} profile={'teacher'}/>
        ));

        return filtered
    }

    render() {
        const {isLoading, error, users} = this.props;

        if (error || !users || isLoading || users.length === 0) {
            return (
                <StatusMessage
                    error={error || !users}
                    errorClassName="users-error"
                    errorMessage={error}
                    loading={isLoading}
                    loadingMessage={`We are fetching the teachers for you`}
                    nothing={users && users.length === 0}
                    nothingMessage={`No teachers to display`}
                    nothingClassName="users-error"
                    type="default"
                />
            );
        }

        return (
            <Item.Group divided>
                {this.getTeachers()}
            </Item.Group>
        )
    }
}

export default Teachers
