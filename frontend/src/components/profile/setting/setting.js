import React, {Component} from 'react';

import './setting.css';
import {Label, Button, Header, Form, Input} from "semantic-ui-react";

class Setting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            email: '',
            password: '',
            phoneNumber: '',
            dateOfBirth: null,
            photo: '',
            from: {
                country: '',
                city: '',
                street: '',
            },

        };
    }

    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
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
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        label="Phone Number"
                        placeholder="Phone number..."
                        type="text"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Date Of Birth"
                        type="date"
                        name="dateOfBirth"
                        value={this.state.dateOfBirth}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Photo"
                        type="text"
                        name="photo"
                        value={this.state.photo}
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
                            value={this.state.from.country}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field width={5}>
                        <Form.Input
                            label="City"
                            placeholder="City..."
                            type="text"
                            name="city"
                            value={this.state.from.city}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field width={5}>
                        <Form.Input
                            label="Street"
                            placeholder="Street..."
                            type="text"
                            name="street"
                            value={this.state.from.street}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                </Form.Group>

                <Form.Button
                    basic
                    color="grey"
                    fluid>
                    Update
                </Form.Button>
            </Form>

        );
    }
}

export default Setting;

