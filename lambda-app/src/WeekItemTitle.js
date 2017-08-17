import React, { Component } from 'react';
import WeekItemSprint from './WeekItemSprints';

class WeekItemTitle extends Component {
  constructor() {
    super();

    this.state = {
      showContent: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showContent: !this.state.showContent
    })
  }

  render() {
    let visible = this.state.showContent ? "showCont" : "hideCont";
    const title = Object.keys(this.props.data);
    return (
      <li>
        <p onClick={this.handleClick}>{title}</p>
        <ul className={visible}>
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
