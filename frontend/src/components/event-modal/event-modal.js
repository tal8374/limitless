import React, {Component} from 'react';
import {Button, Form, Modal, TextArea} from "semantic-ui-react";
import DateRangePicker from "../date-range-picker/date-range-picker";

class EventModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            event: props.event,
            pickedDates: [props.event.start, props.event.end],
            action: props.action,
            onRemoveEvent: props.onRemoveEvent
        };

        this.state.event._id = this.state.event._id ? this.state.event._id : this.uuidv4();
    }

    handleTitleChangeChange(e) {
        let event = this.state.event;
        event.title = e.target.value;

        this.setState({event: event})
    }

    handleDateRangeChange(date) {
        const event = this.state.event;
        event.start = date[0];
        event.end = date[1];

        this.setState({event: event});
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    handleClickedPositive() {
        this.props.handleModalEventCreate(this.state.event);
    }

    getPositiveMessage() {
        if (this.state.action === 'NEW') {
            return 'Create';
        } else if (this.state.action === 'UPDATE') {
            return 'Update'
        }
    }

    onRemoveEventClicked() {
        this.state.onRemoveEvent(this.state.event);
    }

    getRemoveButton() {
        if (this.state.action === 'UPDATE') {
            return <Button onClick={this.onRemoveEventClicked.bind(this)} negative>
                Remove Event
            </Button>
        } else {
            return null;
        }
    }

    render() {
        return <Modal
            size={'tiny'}
            style={{width: '24%', height: '50%', marginTop: '10%', marginLeft: '30%'}}
            open={true}
            onClose={this.props.closeNewEventModal}>
            <Modal.Header>Creating New Event</Modal.Header>
            <Modal.Content>
                <Form>
                    <TextArea
                        placeholder='Give some description...'
                        value={this.state.event.title}
                        onChange={this.handleTitleChangeChange.bind(this)}
                        style={{marginBottom: '2%'}}
                    />
                </Form>
                <DateRangePicker pickedDates={this.state.pickedDates}
                                 handleDateRangeChange={this.handleDateRangeChange.bind(this)}/>
            </Modal.Content>
            <Modal.Actions>
                {this.getRemoveButton()}
                <Button onClick={this.props.closeNewEventModal} negative>
                    Cancel
                </Button>
                <Button
                    onClick={this.handleClickedPositive.bind(this)}
                    positive
                    labelPosition='right'
                    icon='checkmark'
                    content={this.getPositiveMessage()}
                />
            </Modal.Actions>
        </Modal>
    }
}

export default EventModal;
