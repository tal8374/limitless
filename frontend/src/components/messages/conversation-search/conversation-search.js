import React, { Component } from 'react';
import './conversation-search.css';

export default class ConversationSearch extends Component {
  render() {
    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
        />
      </div>
    );
  }
}
