import React, { Component } from 'react';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = this.updateClock();
  }

  updateClock() {
    return {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds()
    };
  }

  tick() {
    this.setState(this.updateClock());
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  pad = n => ('0' + n).slice(-2);

  render() {
    return (
      <div id='clock-container'>
        <span id='hours'>{this.pad(this.state.hours)}</span>
        <span> : </span>
        <span id='minutes'>{this.pad(this.state.minutes)}</span>
        <span> : </span>
        <span id='seconds'>{this.pad(this.state.seconds)}</span>
      </div>
    );
  }
}
