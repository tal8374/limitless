import React, {Component} from 'react';
import './compose.css';

export default class Compose extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        }
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter' && this.state.message !== '') {
            this.props.sendMessage({
                body: this.state.message,
                by: this.props.loggedInUser._id,
                for: this.props.user._id
            })

            this.setState({
                message: ''
            })
        }
    };

    updateInputValue(evt) {
        this.setState({
            message: evt.target.value
        });
    }

    render() {
        return (
            <div className="compose">
                <input
                    type="text"
                    className="compose-input"
                    placeholder="Type a message"
                    onKeyDown={this._handleKeyDown.bind(this)}
                    onChange={this.updateInputValue.bind(this)}
                    value={this.state.message}
                />

                <button>Send</button>

                {
                    this.props.rightItems
                }
            </div>
        );
    }
}
