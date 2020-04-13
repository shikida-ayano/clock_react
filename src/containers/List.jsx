import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import List from '../components/List';

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
      <List
        clock={this.props.clock}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopContainer);
