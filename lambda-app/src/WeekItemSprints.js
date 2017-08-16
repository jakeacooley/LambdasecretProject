import React, { Component } from 'react';

class WeekItemSprint extends Component {
  render() {
    const sprint = Object.keys(this.props.data);
    return (
      <li>
        {sprint}
        <ul>
          {Object.keys(this.props.data[sprint]).forEach((url, idx) => {
            return(
              <li>Test</li>
            );
          })}
        </ul>
      </li>
    );
  }
}

export default WeekItemSprint;
