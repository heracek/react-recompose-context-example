import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { DashboardIdProvider } from './dashboardIdProvider';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const SomeOtherComponent = () => (
  <div>
    <Hello name="Context 3" />
  </div>
);

// HERE: remember to install `recompose` and `prop-types` npm packages!

const App = () => (
  <div style={styles}>
    {/* HERE: This provides context for `Hello` component  */}
    <DashboardIdProvider dashboardId="42">
      <Hello name="Context 1 example" />
    </DashboardIdProvider>

    <DashboardIdProvider dashboardId="123">
      <Hello name="Context 2 example" />
    </DashboardIdProvider>

    {/*
      HERE: This provides context for `Hello` component
      although it's wrapped in other component.
    */}
    <DashboardIdProvider dashboardId="123456">
      <SomeOtherComponent />
    </DashboardIdProvider>

    {/* HERE: This is `Hello` with no context */}
    <Hello name="No Context example" />
  </div>
);

render(<App />, document.getElementById('root'));
