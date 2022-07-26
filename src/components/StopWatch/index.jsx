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

  handlerReset = () => {
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
        <h1 className={s.title}>
          <span>Stop</span>
          <span>Watch</span>
        </h1>
        <article className={s.article}>
          <p className={s.watch}>{time.toLocaleTimeString("en-GB")}</p>
          <div className={s.block_btns}>
            <button
              className={`${s.btn} ${s.btn_start}`}
              onClick={this.handlerStart}
            >
              Start
            </button>
            <button
              className={`${s.btn} ${s.btn_stop}`}
              onClick={this.handlerStop}
            >
              Stop
            </button>

            <button
              className={`${s.btn} ${s.btn_reset}`}
              onClick={this.handlerReset}
            >
              Reset
            </button>
          </div>
        </article>
      </>
    );
  }
}

export default StopWatch;
