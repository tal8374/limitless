import React, {Component} from 'react';
import {Form, Icon, Message, Button, Accordion, Checkbox} from 'semantic-ui-react';
import StatusMessage from '../../components/status-message/status-message';
import './register.css';
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import {Link} from "react-router-dom";
import Label from "semantic-ui-react/dist/commonjs/elements/Label";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            email: '',
            password: '',
            checked: true,
        };
    }

    handleChange = (e, {name, value}) => {
        this.setState({[name]: value});
    };

    handleCheckbox = () => {
        this.setState({checked: !this.state.checked});
    };

    isFormValid = () => {
        const {firstName, email, password, checked} = this.state;

        let isFormValid = true;
        if (!firstName || !email || !this.validateEmail(email) || !password || !checked || password) {
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
            let data = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            };
        }
    };

    render() {
        let {isLoading, error} = this.props;

        const panels = [
            {
                key: 'details',
                title: 'Optional Details',
                content: {
                    as: Form.Input,
                    label: 'Maiden Name',
                    placeholder: 'Maiden Name',
                },
            },
        ];

        const statusMessage = (
            <StatusMessage
                error={error}
                errorMessage={error || 'Login Error'}
                loading={isLoading}
                loadingMessage={'Registering your account'}
                type="modal"
            />
        );

        return (
            <div>
                <Grid textAlign='center' style={{height: '100%', marginTop: '5%'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Message
                            attached
                            header="Welcome to our site!"
                            content="Fill out the form below to sign-up for a new account"
                        />
                        {statusMessage}
                        <Form className="attached fluid segment">
                            <Form.Input
                                required
                                label="First name"
                                placeholder="First name"
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
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
                                label="Password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <Accordion as={Form.Field} panels={panels}/>
                            <Form.Field>
                                <Label basic>Register as a:</Label>
                                <Checkbox
                                    style={{marginLeft: '5%', marginRight: '5%'}}
                                    radio
                                    label='teacher'
                                    name='checkboxRadioGroup'
                                    value='teacher'
                                    checked={this.state.role === 'teacher'}
                                    onChange={this.handleChange}
                                />
                                <Checkbox
                                    radio
                                    label='Student'
                                    name='checkboxRadioGroup'
                                    value='student'
                                    checked={this.state.role === 'student'}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Button
                                basic
                                color="grey"
                                fluid
                                loading={isLoading}
                                disabled={isLoading}
                                onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                        <Message attached="bottom" warning>
                            <Icon name="help"/>
                            Already signed up?&nbsp;
                            {/* eslint-disable-next-line */}
                            <Link className="register-login" to='/login'>
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
