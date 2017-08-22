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
    const keys = Object.keys(this.props.data[sprint]);
    return (
      <li>
        <p onClick={this.handleClick}>{sprint}</p>
        <ul className={visible}>
          {Object.keys(this.props.data[sprint]).map((url, idx) => {
            return (
              <li key={idx}>
                {url}:<br />
                <a href={this.props.data[sprint][url][0]}>Github</a>,<br />
                <iframe id="ytplayer" title={idx} type="text/html" width="640" height="360"
  src={this.state.showContent ? this.props.data[sprint][url][1] : ""} frameBorder="0"></iframe>
            </li>
            );
          })}
        </ul>
      </li>
    );
  }
}

export default WeekItemSprint;
