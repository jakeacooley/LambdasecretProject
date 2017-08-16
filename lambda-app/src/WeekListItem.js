import React, { Component } from 'react';

class WeekListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent: false
    };
  }

  handleClick() {
    this.setState({
      showContent: !this.state.showContent
    });
  }

  render() {
    return(
      <div></div>
    );
  }
}

export default WeekListItem;
