import React, {Component} from 'react';
import {Grid, Segment} from "semantic-ui-react";
import Comments from "../../components/comments/comments";
import Profile from "../../components/profile/profile";
import Calendar from "../../components/account/calendar/calendar";
import {fetchUser} from "../../actions";
import {connect} from "react-redux";

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

    getCalendar() {
        return !this.state.showCalendar ? null :
            (
                <Grid.Row>
                    <Grid.Column width={1}/>
                    <Grid.Column width={14}>
                        <Calendar/>
                    </Grid.Column>
                    <Grid.Column width={1}/>
                </Grid.Row>
            )
    }

    render() {
        return (
            <Segment>
                <Grid style={{marginTop: '1%'}}>
                    <Grid.Row>
                        <Grid.Column width={1}/>
                        <Grid.Column width={11}>
                            <Profile { ...this.props }/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Comments { ...this.props }/>
                        </Grid.Column>
                        <Grid.Column width={1}/>
                    </Grid.Row>
                    {this.getCalendar()}
                </Grid>
            </Segment>
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
