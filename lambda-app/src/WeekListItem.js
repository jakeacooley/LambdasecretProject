import React, { Component } from 'react';
import WeekItemTitle from './WeekItemTitle';

class WeekListItem extends Component {
  constructor(props) {
    super(props);

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
    return(
      <li onClick={this.handleClick}>
        Week {this.props.data.week}
        <ul className={visible}>
          {this.props.data.topic.map((element, idx) => {
            return (
              <WeekItemTitle key={idx} data={element}/>
            );
          })}
        </ul>
      </li>
    );
  }
}

export default WeekListItem;
