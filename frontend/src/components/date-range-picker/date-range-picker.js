import React, { Component } from 'react';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

class DateRangePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: [props.pickedDates[0], props.pickedDates[1]],
        };
        this.onChange = this.onChange.bind(this)
    }

    onChange(date) {
        this.setState({ date });
        this.props.handleDateRangeChange(date);
    }

    render() {
        return (
            <div>
                <DateTimeRangePicker
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}

export default DateRangePicker;
