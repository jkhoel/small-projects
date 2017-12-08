import React from 'react';
import './style.css';

export default class About extends React.Component {
  render() {
    return (
      <div className="about-wrapper">
        <div className="about-text">
          <div className={ this.props.className } >
            <h3>Title</h3>
            <p>This is a text that will appear</p>
          </div>
        </div>
      </div>
    )
  }
}