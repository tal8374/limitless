import React, {Component} from 'react'
import {Item} from 'semantic-ui-react'
import Profile from "../profile/profile";

class Teachers extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    getTeachers() {
        let filtered = this.props.teachers.slice(this.props.getToSkip(), this.props.getToSkip() + this.props.getToLimit());

        filtered = filtered.map((teacher) => (
            <Profile key={teacher.key} user={teacher} profile={'teacher'}/>
        ));

        return filtered
    }

    render() {
        return (
            <Item.Group divided>
                {this.getTeachers()}
            </Item.Group>
        )
    }
}

export default Teachers
