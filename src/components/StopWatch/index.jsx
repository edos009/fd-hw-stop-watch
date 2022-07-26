import React, { Component } from "react";
import s from "./StopWatch.module.css";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
    };
  }

  handlerStart = () => {};

  handlerStop = () => {};

  handlerRestart = () => {};

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
