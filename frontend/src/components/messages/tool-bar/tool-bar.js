import React, { Component } from 'react';
import './tool-bar.css';

export default class Toolbar extends Component {
  render() {
    const { title, leftItems, rightItems } = this.props;
    return (
      <div className="toolbar">
        <div className="left-items">{ leftItems }</div>
        <h1 className="toolbar-title">{ title }</h1>
        <div className="right-items">{ rightItems }</div>
      </div>
    );
  }
}
