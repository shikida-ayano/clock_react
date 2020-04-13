import React, { Component } from 'react';
import { css } from 'aphrodite';
import moment from 'moment';
import { Link } from 'react-router';
import style from './style';

export default class Top extends Component {
  constructor() {
    super();
    this.state = {
      now: moment().format('HH:mm:ss'),
      rest: '0:00',
      work: '0:00',
    }
  }

  updateTime() {
    setTimeout(() => {
      const now = Date.now();
      const history = this.props.clock.history;
      let workTotal = 0;
      let restTotal = 0;
      let pre;
      for (let i = 0; i < history.length; i++) {
        if (!pre) {
          pre = history[i];
          continue;
        }
        if (i % 2 === 0) {
          restTotal += history[i] - pre;
        } else {
          workTotal += history[i] - pre;
        }
        pre = history[i];
      }
      if (history.length !== 0) {
        if (history.length % 2 === 0) {
          restTotal += now - history[history.length - 1];
        } else {
          workTotal += now - history[history.length - 1];
        }
      }
      const workSec = (workTotal - workTotal % 1000) / 1000;
      const restSec = (restTotal - restTotal % 1000) / 1000;
      const work = `${(workSec - workSec % 60) / 60 }:${`0${workSec % 60}`.slice(-2)}`;
      const rest = `${(restSec - restSec % 60) / 60 }:${`0${restSec % 60}`.slice(-2)}`;
      this.setState({
        now: moment(new Date(now)).format('HH:mm:ss'),
        work,
        rest,
      });
      this.updateTime();
    }, 1000);
  }

  componentDidMount() {
    this.updateTime();
  }

  render() {
    const status = this.props.clock.clicked ? '出勤中' : '退勤中';

    return (
      <div className={css(style.module)} >
        <h1 className={css(style.status)} >{status}</h1>
        <div className={css(style.now)} >{this.state.now}</div>
        <div className={css(style.buttonWrap)}>
          <button
            className={css(style.button)}
            onClick={() => { this.props.clickButton() }}
          >
            押す
          </button>
          <div>
            <span className={css(style.text)}>総計：{this.state.work}</span>
            <span className={css(style.text)}>休憩：{this.state.rest}</span>
          </div>
          <Link className={css(style.link)} to="/list">勤怠状況一覧</Link>
        </div>
      </div>
    )
  }
}
