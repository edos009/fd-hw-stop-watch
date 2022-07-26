import React, { Component } from "react";
import s from "./StopWatch.module.css";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
    };
    this.timerId = null;
  }

  tick = () => {
    this.setState((state) => {
      const newTime = state.time.getTime() + 1000;
      return { time: new Date(newTime) };
    });
  };

  handlerStart = () => {
    if (this.timerId === null) {
      this.timerId = setTimeout(this.tick, 1000);
    }
  };

  handlerStop = () => {
    clearTimeout(this.timerId);
    this.timerId = null;
  };

  handlerRestart = () => {
    this.handlerStop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  };

  componentDidUpdate() {
    if (this.timerId !== null) {
      this.timerId = null;
      this.handlerStart();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    const { time } = this.state;
    return (
      <>
        <h1>Stopwatch</h1>
        <article>
          <p>{time.toLocaleTimeString("en-GB")}</p>
          <div>
            <button onClick={this.handlerStart}>Start</button>
            <button onClick={this.handlerStop}>Stop</button>
            <button onClick={this.handlerRestart}>Restart</button>
          </div>
        </article>
      </>
    );
  }
}

export default StopWatch;
