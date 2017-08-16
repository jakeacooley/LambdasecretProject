import React, { Component } from 'react';
import WeekItemSprint from './WeekItemSprints';

class WeekItemTitle extends Component {

  render() {
    const title = Object.keys(this.props.data);
    return (
      <li>
        {title}
        <ul>
          {this.props.data[title].map((sprint, idx) => {
            return(
              <WeekItemSprint key={idx} data={sprint}/>
            );
          })}
        </ul>
      </li>
    );
  }
}

export default WeekItemTitle;
