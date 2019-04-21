import React, {Component} from 'react';

import Navlink from '../../components/navlink/navlink';
import {connect} from "react-redux";
import {logout, updateLoggedInUser} from "../../actions";

class HeaderContainer extends Component {
    constructor(props) {
        super(props)

        this.updateLoggedInUserRequest();

        setInterval(this.updateLoggedInUserRequest.bind(this), 1000);
    }

    updateLoggedInUserRequest() {
        let userId = localStorage.getItem('userId');

        if (userId) {
            this.props.handleUpdateLoggedInUser(userId);
        }
    }

    render() {
        return (
            <div>
                <Navlink
                    {...this.props}
                    handleLogout={this.props.handleLogout}
                    handleUpdateLoggedInUser={this.props.handleUpdateLoggedInUser}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedInUser: state.auth.loggedInUser,
});

const mapDispatchToProps = dispatch => ({
    handleLogout: () => {
        dispatch(logout());
    },
    handleUpdateLoggedInUser: (_id) => {
        dispatch(updateLoggedInUser(_id));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeaderContainer);
