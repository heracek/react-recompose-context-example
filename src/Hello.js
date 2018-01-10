import React, { Component } from 'react';
import { connectDashboardId } from './dashboardIdProvider';

class Hello extends Component {
  render() {
    const { name, dashboardId } = this.props;
    const dashboardString = dashboardId
      ? `\u2728${dashboardId}\u2728`
      : '"undefined" 😞 ';

    return (
      <div>
        Hello <strong>{name}</strong> from dashboard{' '}
        <strong>{dashboardString}</strong>!
      </div>
    );
  }
}

// HERE: This connects `Hello` component to context.
export default connectDashboardId(Hello);
