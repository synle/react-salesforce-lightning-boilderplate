import * as React from 'react';
import { render } from 'react-dom';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import App from 'src/pages/App';

render(
  <IconSettings iconPath='/icons'>
    <App />
  </IconSettings>,
  document.getElementById('main'),
);
