import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

class LayoutContainer extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div style={{backgroundColor: '#f9f7eb', height: '100%', width: '100%', padding: '50px' }}>
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutContainer);
