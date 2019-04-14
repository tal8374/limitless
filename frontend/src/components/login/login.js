import React, {Component} from 'react';

import './login.css';
import {Form, Icon, Message, Button} from 'semantic-ui-react';
import StatusMessage from '../../components/status-message/status-message';
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import {Link, withRouter} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = (e, {name, value}) => {
        this.setState({[name]: value});
    };

    isFormValid = () => {
        const {email, password} = this.state;

        let isFormValid = true;
        if (!email || !password || !(this.validateEmail(email))) {
            isFormValid = false;
        }
        return isFormValid;
    };

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleSubmit = e => {
        if (this.isFormValid()) {
            this.props.handleLogin(this.state.email, this.state.password);
        }
    };

    render() {
        let {isLoading, error} = this.props;

        const statusMessage = (
            <StatusMessage
                error={error}
                errorMessage={error || 'Login Error'}
                loading={isLoading}
                loadingMessage={'Signing in'}
                type="modal"
            />
        );

        if (this.props.loggedInUser) {
            this.props.history.push('/');
        }
        return (
            <div className='login-form'>
                <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Message attached header="Login"/>
                        {statusMessage}
                        <Form className="attached fluid segment">
                            <Form.Input
                                required
                                label="Email"
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                required
                                placeholder="Password"
                                label="Password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <Button
                                color="grey"
                                fluid
                                loading={isLoading}
                                disabled={isLoading}
                                onClick={this.handleSubmit}>
                                Login
                            </Button>
                        </Form>
                        <Message attached="bottom" warning>
                            <Icon name="help"/>
                            New to this site?&nbsp;
                            {/* eslint-disable-next-line */}
                            <Link className="login-register" to='register'>
                                Login here
                            </Link>
                            &nbsp;instead.
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(Login);

