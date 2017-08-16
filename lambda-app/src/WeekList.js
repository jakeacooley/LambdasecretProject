import React, { Component } from 'react';
import WeekListItem from './WeekListItem';
import { data } from './data';

class WeekList extends Component {
  constructor() {
    super();

    this.state = {
      data,
    };
  }

  render() {
    return (
      <div className="list-container">
          <ul>
            {this.state.data.map((item, idx) => {
              return (
                <WeekListItem data={item} key={item.week}/>
              );
            })}
          </ul>
      </div>
    );
  }
}

export default WeekList;
