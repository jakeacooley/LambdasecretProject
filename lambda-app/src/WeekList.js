import React, { Component } from 'react';
import WeekListItem from './WeekListItem';

class WeekList extends Component {
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
    return (
      <div className="list-container">
        <ul>
          <li>
            <p id="week-label" onClick={this.handleClick}>Week 1</p>
            <ul id="project-list" className={visible}>
              <li>
                <p id="inner-label">Basic Javascript</p>
              </li>
              <li>
                <p id="inner-label">Advanced Javascript</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label"  onClick={this.handleClick}>Week 2</p>
            <ul id="project-list" className={visible}>
              <li>
                <p id="inner-label">Data Structures I</p>
              </li>
              <li>
                <p id="inner-label">Data Structures II</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 3</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Dom</p>
              </li>
              <li>
              <p id="inner-label">React I</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 4</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">React II</p>
              </li>
              <li>
                <p id="inner-label">Redux</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 5</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">HTTP/AJAX</p>
              </li>
              <li>
                <p id="inner-label">SPA/Routing</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 6</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Client Testing</p>
              </li>
              <li>
                <p id="inner-label">Node/Express</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Week 7</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">MongoDB I</p>
              </li>
              <li>
                <p id="inner-label">MongoDB II</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Week 8</p>
            <ul id="project-list">
              <li>
                <p  id="inner-label">MongoDB III</p>
              </li>
              <li>
                <p  id="inner-label">Auth</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Week 9</p>
            <ul id="project-list">
              <li>
                <p  id="inner-label">Client Auth</p>
              </li>
              <li>
                <p  id="inner-label">Server Testing</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 10</p>
            <ul id="project-list">
              <li>
                <p  id="inner-label">DevOps & Deployment</p>
              </li>
              <li>
                <p  id="inner-label">React Native I</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 11</p>
            <ul id="project-list">
              <li>
                <p  id="inner-label">React Native II</p>
              </li>
              <li>
                <p id="inner-label">React Native III</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 12</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Break Week + Personal Project</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 13</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Computer Architecture I</p>
              </li>
              <li>
                <p id="inner-label">Computer Architecture II</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 14</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Computer Architecture III</p>
              </li>
              <li>
                <p id="inner-label">C++ I</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 15</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">C++ II</p>
              </li>
              <li>
                <p id="inner-label">C++ III</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 16</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Data Structures I</p>
              </li>
              <li>
                <p id="inner-label">Data Structures II</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 17</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Data Structures III</p>
              </li>
              <li>
                <p id="inner-label">Algorithms I</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 18</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Algorithms II</p>
              </li>
              <li>
                <p id="inner-label">Operating Systems I</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 19</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Operating Systems II</p>
              </li>
              <li>
                <p id="inner-label">Operating Systems III</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 20</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">V8 Engine I</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 21</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Rational DBs I</p>
              </li>
              <li>
                <p id="inner-label">Rational DBs II</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 22</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Capstone Project</p>
              </li>
              <li>
                <p id="inner-label">Capstone Project</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 23</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Capstone Project</p>
              </li>
              <li>
                <p id="inner-label">Capstone Project</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 24</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Capstone Project</p>
              </li>
              <li>
                <p id="inner-label">Capstone Project</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 25</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Capstone Project</p>
              </li>
              <li>
                <p id="inner-label">Capstone Project</p>
              </li>
            </ul>
          </li>
          <li>
            <p id="week-label">Week 26</p>
            <ul id="project-list">
              <li>
                <p id="inner-label">Interview Strategies</p>
              </li>
              <li>
                <p id="inner-label">Job Search Strategies</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default WeekList;
