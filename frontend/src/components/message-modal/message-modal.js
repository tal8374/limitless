import React, {Component} from 'react';
import {Modal, Button, Header, Icon, TextArea, Form} from 'semantic-ui-react';

import './message-modal.css';

class MessageModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            body: ''
        }
    }

    onCloseClicked() {
        this.props.closeCreateMessageModal();
    }

    onCreateMessageClicked() {
        console.log(this.props.loggedInUser)

        if(!this.props.loggedInUser) {
            return;
        }

        console.log('here1')
        this.props.sendMessage({
            for: this.props.user._id,
            by: this.props.loggedInUser._id,
            body: this.state.body
        });

        console.log('here')
    }

    getFullName(user) {
        if (user.firstName) {
            let lastName = user.lastName ? user.lastName : '';

            return user.firstName + ' ' + lastName
        } else {
            let email = user.email;
            let emailTitle = email.substring(0, email.indexOf('@'));

            return emailTitle
        }
    }

    getHeaderContent() {
        // return 'Create New Message to ';
        return 'Create New Message to ' + this.getFullName(this.props.user);
    }

    handleChange(evt) {
        this.setState({
            body: evt.target.value
        });
    }

    render() {
        return (
            <Modal style={{
                marginTop: 'auto !important', display: 'inline-block !important',
                position: 'relative', maxHeight: '250px'
            }} open={true} closeIcon size={'tiny'}>
                <Header icon='envelope' content={this.getHeaderContent()}/>
                <Modal.Content>
                    <Form>
                        <TextArea
                            onChange={(e) => {
                                this.handleChange(e)
                            }}
                            value={this.state.body}
                            placeholder='Message content...'
                        />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.onCloseClicked.bind(this)} color='red'>
                        <Icon name='remove'/> Cancel
                    </Button>
                    <Button disabled={this.state.body === ''} onClick={this.onCreateMessageClicked.bind(this)} color='green'>
                        <Icon name='checkmark'/> Send Message
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default MessageModal
