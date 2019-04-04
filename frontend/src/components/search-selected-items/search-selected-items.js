import React, {Component} from 'react';
import {Button, Icon, Label} from 'semantic-ui-react'

export default class SearchSelectedItems extends Component {

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

        return (
            <div>
                <Button
                    basic
                    color="grey"
                    loading={isLoading}
                    disabled={isLoading}
                    onClick={this.handleSubmit}>
                    Clear
                </Button>

                <Label as='a'>
                    <Icon name='mail'/>
                    Mail
                </Label>
                <Label as='a'>
                    Tag
                    <Icon name='delete'/>
                </Label>
            </div>
        );
    }

}
