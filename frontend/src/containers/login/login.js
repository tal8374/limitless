import React, {Component} from 'react';
import Login from "../../components/login/login";
import {connect} from 'react-redux';
import {login} from '../../actions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {
            isLoading,
            error,
            handleLogin,
        } = this.props;

        return (
            <Login
                handleLogin={handleLogin}
                isLoading={isLoading}
                error={error}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    error: state.auth.error,
    loggedInUser: state.auth.loggedInUser,
});

const mapDispatchToProps = dispatch => ({
    handleLogin: (email, password) => {
        dispatch(login(email, password));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginContainer );
