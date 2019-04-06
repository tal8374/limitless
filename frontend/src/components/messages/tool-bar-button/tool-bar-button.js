import React, { Component } from 'react';
import './tool-bar-button.css';

export default class ToolbarButton extends Component {
  render() {
    const { icon } = this.props;
    return (
      <i className={`toolbar-button ${icon}`} />
    );
  }
}
