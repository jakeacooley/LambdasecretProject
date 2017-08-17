import React, { Component } from 'react';

class WeekItemSprint extends Component {
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
  });
}

  render() {
    let visible = this.state.showContent ? "showCont" : "hideCont";
    const sprint = Object.keys(this.props.data);
    return (
      <li>
        <p onClick={this.handleClick}>{sprint}</p>
        <ul className={visible}>
          {Object.keys(this.props.data[sprint]).map((url, idx) => {
            return (
              <li key={idx}>{url}: {this.props.data[sprint][url]}</li>
            );
          })}
        </ul>
      </li>
    );
  }
}

export default WeekItemSprint;
