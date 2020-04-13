import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import { clickButton } from '../actions/clock';
import Top from '../components/Top';

const mapStateToProps = state => ({
  clock: state.clock,
});

const mapDispatchToProps = dispatch => ({
  clickButton: () => (
    dispatch(clickButton())
  ),
});

class TopContainer extends Component {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <Top
        clock={this.props.clock}
        clickButton={this.props.clickButton}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopContainer);
