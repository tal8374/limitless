import React, {Component} from 'react';

import Navlink from '../../components/navlink/navlink';
import {connect} from "react-redux";
import {logout} from "../../actions";

class HeaderContainer extends Component {
    render() {

        return (
            <div>
                <Navlink
                    {...this.props}
                    handleLogout={this.props.handleLogout}
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
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeaderContainer );
