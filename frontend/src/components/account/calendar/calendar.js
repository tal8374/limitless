import React from 'react'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import moment from 'moment'
import NewEventModal from "../../event-modal/event-modal";

const DragAndDropCalendar = withDragAndDrop(BigCalendar);
const events = [
    {
        _id: 1,
        title: 'Birthday Party',
        start: new Date(2019, 3, 7, 7, 0, 0),
        end: new Date(2019, 3, 7, 10, 30, 0),
    },
];
const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: events,
            isEventModalOpen: false,
            event: {}
        };

        this.moveEvent = this.moveEvent.bind(this);
    }

    moveEvent({event, start, end, isAllDay: droppedOnAllDaySlot}) {
        const {events} = this.state;

        const idx = events.indexOf(event);
        let allDay = event.allDay;

        if (!event.allDay && droppedOnAllDaySlot) {
            allDay = true;
        } else if (event.allDay && !droppedOnAllDaySlot) {
            allDay = false;
        }

        const updatedEvent = {...event, start, end, allDay};

        const nextEvents = [...events];
        nextEvents.splice(idx, 1, updatedEvent);

        this.setState({
            events: nextEvents,
        })
    }

    onRemoveEvent(event) {
        const {events} = this.state;

        const nextEvents = events.filter(existingEvent => {
            return existingEvent._id !== event._id
        });

        this.setState({
            events: nextEvents,
            isEventModalOpen: false
        })
    }

    resizeEvent = ({event, start, end}) => {
        const {events} = this.state;

        const nextEvents = events.map(existingEvent => {
            return existingEvent._id === event._id
                ? {...existingEvent, start, end}
                : existingEvent
        });

        this.setState({
            events: nextEvents,
        })
    };

    handleNewEvent(event) {
        this.setState({event: {start: event.start, end: event.end}});
        this.setState({action: 'NEW'});
        this.setState({isEventModalOpen: true});
    }

    showEventData(event) {
        this.setState({event: event});
        this.setState({action: 'UPDATE'});
        this.setState({isEventModalOpen: true});
    }

    closeNewEventModal = () => this.setState({isEventModalOpen: false});

    createNewEventClicked(event) {
        this.setState({events: [...this.state.events, event]});
        this.setState({isEventModalOpen: false});
        this.setState({newEvent: {}});
    }

    updateEventClicked(event) {
        const {events} = this.state;

        const nextEvents = events.map(existingEvent => {
            return existingEvent._id === event._id
                ? event
                : existingEvent
        });

        this.setState({
            events: nextEvents,
            isEventModalOpen: false
        })
    }

    closeNewEventModal() {
        this.setState({isEventModalOpen: false});
    }

    getNewEventModal() {
        const action = this.state.action === 'UPDATE' ? this.updateEventClicked : this.createNewEventClicked;

        return !this.state.isEventModalOpen ? null :
            <NewEventModal
                onRemoveEvent={this.onRemoveEvent.bind(this)}
                action={this.state.action}
                event={this.state.event}
                closeNewEventModal={this.closeNewEventModal.bind(this)}
                handleModalEventCreate={action.bind(this)}
            />
    }

    render() {
        return (
            <div>
                {this.getNewEventModal()}

                <div>
                    <DragAndDropCalendar
                        selectable
                        localizer={localizer}
                        events={this.state.events}
                        onEventDrop={this.moveEvent}
                        resizable
                        onEventResize={this.resizeEvent.bind(this)}
                        onSelectSlot={this.handleNewEvent.bind(this)}
                        onSelectEvent={this.showEventData.bind(this)}
                        defaultView={BigCalendar.Views.WEEK}
                    />
                </div>
            </div>

        )
    }
}

export default Calendar
