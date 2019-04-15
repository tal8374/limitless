import React, {Component} from 'react';

import AccountMenu from '../../components/account/account-menu/account-menu';
import {updateUser} from "../../actions";
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
    handleUpdate: (id, newProfile) => {
        dispatch(updateUser(id, newProfile));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserAccountContainer);
