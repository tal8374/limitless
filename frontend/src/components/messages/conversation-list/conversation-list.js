import React, { Component } from 'react';
import ConversationSearch from '../conversation-search/conversation-search';
import ConversationListItem from '../conversation-list-item/conversation-list-item';
import Toolbar from '../tool-bar/tool-bar';
import ToolbarButton from '../tool-bar-button/tool-bar-button';
import axios from 'axios';

import './conversation-list.css';

export default class ConversationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: []
    };
  }

  componentDidMount() {
    this.getConversations();
  }

  getConversations = () => {
    axios.get('https://randomuser.me/api/?results=20').then(response => {
      this.setState(prevState => {
        let conversations = response.data.results.map(result => {
          return {
            photo: result.picture.large,
            name: `${result.name.first} ${result.name.last}`,
            text: 'Hello world! This is a long message that needs to be truncated.'
          };
        });

        return { ...prevState, conversations };
      });
    });
  }

  render() {
    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {
          this.state.conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
    );
  }
}
