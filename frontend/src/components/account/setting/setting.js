import React, {Component} from 'react';

import './setting.css';
import {Header, Form} from "semantic-ui-react";
import StatusMessage from "../../../containers/teachers/teachers";

class Setting extends Component {

    constructor(props) {
        super(props);

        this.state = {loggedInUser: this.props.loggedInUser}
    }

    handleSubmit = e => {
        this.props.handleUpdate(this.state.loggedInUser._id, this.state.loggedInUser);
    };

    handleChange = (e, {name, value}) => {
        let loggedInUser = this.state.loggedInUser;

        switch (name) {
            case 'country':
                loggedInUser['from'][name] = value;
                break;
            case 'city':
                loggedInUser['from'][name] = value;
                break;
            case 'street':
                loggedInUser['from'][name] = value;
                break;
            default:
                loggedInUser[name] = value;
        }

        this.setState({loggedInUser: loggedInUser});
    };

    componentWillReceiveProps(nextProps) {
        this.setState({loggedInUser: nextProps.loggedInUser})
    }

    render() {

        let {isLoading, error, loggedInUser} = this.props;

        if (error || !loggedInUser || isLoading) {
            return (
                <StatusMessage
                    error={error || !loggedInUser}
                    errorClassName="users-error"
                    errorMessage={error}
                    loading={isLoading}
                    loadingMessage={`We are fetching the setting details for you`}
                    nothing={loggedInUser}
                    nothingMessage={`No setting details to display`}
                    nothingClassName="users-error"
                    type="default"
                />
            );
        }

        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input
                        label="First name"
                        placeholder="First name"
                        type="text"
                        name="firstName"
                        value={this.state.loggedInUser.firstName}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Last name"
                        placeholder="Last name"
                        type="text"
                        name="lastName"
                        value={this.state.loggedInUser.lastName}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        required
                        label="Email"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={loggedInUser.email}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        required
                        label="Password"
                        type="password"
                        name="password"
                        value={loggedInUser.password}
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        label="Phone Number"
                        placeholder="Phone number..."
                        type="text"
                        name="phoneNumber"
                        value={loggedInUser.phoneNumber}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Date Of Birth"
                        type="date"
                        name="dateOfBirth"
                        value={loggedInUser.dateOfBirth}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Photo"
                        type="text"
                        name="photo"
                        value={loggedInUser.photo}
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.TextArea
                        label="Description"
                        type="text"
                        name="description"
                        value={loggedInUser.description}
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Field width={1}>
                        <Header style={{marginTop: '30%'}}>From:</Header>
                    </Form.Field>
                    <Form.Field width={5}>
                        <Form.Input
                            label="Country"
                            placeholder="Country..."
                            type="text"
                            name="country"
                            value={loggedInUser.from.country}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field width={5}>
                        <Form.Input
                            label="City"
                            placeholder="City..."
                            type="text"
                            name="city"
                            value={loggedInUser.from.city}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field width={5}>
                        <Form.Input
                            label="Street"
                            placeholder="Street..."
                            type="text"
                            name="street"
                            value={loggedInUser.from.street}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                </Form.Group>

                <Form.Button
                    color="grey"
                    fluid
                    onClick={this.handleSubmit}>
                    Update
                </Form.Button>
            </Form>

        );
    }
}

export default Setting;

