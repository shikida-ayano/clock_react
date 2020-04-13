import React, { Component } from 'react';
import { css } from 'aphrodite';
import moment from 'moment';
import { Link } from 'react-router';
import style from './style';

export default class List extends Component {
  constructor() {
    super();
  }

  renderList() {
    const list = this.props.clock.history;
    //const list = [Date.now() - 100000, Date.now()];
    const content = _.map(list, (time, index) => {
      return (
        <tr className={css(style.tr)}>
          <td className={css(style.td)}>{index % 2 === 0 ? moment(new Date(time)).format('HH:mm:ss') : '-'}</td>
          <td className={css(style.td)}>{index % 2 !== 0 ? moment(new Date(time)).format('HH:mm:ss') : '-'}</td>
        </tr>
      );
    });
    return content;
  }

  render() {
    return (
      <div className={css(style.module)} >
        <h1 className={css(style.title)} >勤怠状況一覧</h1>
        <table className={css(style.table)}>
          <tr className={css(style.tr)}>
            <th className={css(style.th)}>出勤時間</th>
            <th className={css(style.th)}>退勤時間</th>
          </tr>
          {this.renderList()}
        </table>
        <div>
          <Link className={css(style.link)} to="/">勤怠入力画面</Link>
        </div>
        <div> 
          <Link className={css(style.link)} to="/time">勤務時間</Link>
        </div>
      </div>
    )
  }
}
