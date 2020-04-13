import React, { Component } from 'react';
import { css } from 'aphrodite';
import moment from 'moment';
import { Link } from 'react-router';
import style from './style';

export default class List extends Component {
  constructor() {
    super();
  }

  renderTime() {
    const list = this.props.clock.history;
    var x = 0;
    //const list = [Date.now() - 100000, Date.now()];
    const content = _.map(list, (time, index) => {
      return (
        <tr className={css(style.tr)}>
          <td className={css(style.td)}>{x += 1}</td>
          <td className={css(style.td)}>{moment(new Date(time)).format('HH:mm:ss')}</td>
        </tr>
      );
    });
    return content;
  }

  render() {
    return (
      <div className={css(style.module)} >
        <h1 className={css(style.title)} >勤務時間</h1>
        <table className={css(style.table)}>
          <tr className={css(style.tr)}>
            <th className={css(style.th)}>NO</th>
            <th className={css(style.th)}>勤務時間</th>
          </tr>
          {this.renderTime()}
        </table>
        <div>
            <Link className={css(style.link)} to="/">勤怠入力画面</Link>
        </div>
        <div>
            <Link className={css(style.link)} to="/list">勤務状況一覧</Link>
        </div>
      </div>
    )
  }
}
