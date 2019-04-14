import React, {Component} from 'react';

import AccountMenu from '../../components/account/account-menu/account-menu';
import {fetchTeachers} from "../../actions";
import {connect} from "react-redux";

class UserAccountContainer extends Component {

    render() {
        return (
            <AccountMenu
                {...this.props}
            />
        );
    }
}

const mapStateToProps = state => ({
    loggedInUser: state.auth.loggedInUser
});

const mapDispatchToProps = dispatch => ({
    fetchTeachers: () => {
        dispatch(fetchTeachers());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserAccountContainer);
