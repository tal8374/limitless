import React, {Component} from 'react';
import './conversation-search.css';

export default class ConversationSearch extends Component {

    updateInputValue(evt) {
        this.props.onSearchChange(evt.target.value);
    }

    render() {
        return (
            <div className="conversation-search">
                <input
                    type="search"
                    className="conversation-search-input"
                    placeholder="Search users"
                    onChange={this.updateInputValue.bind(this)}
                />
            </div>
        );
    }
}
