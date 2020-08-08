import * as React from 'react';
import { render } from 'react-dom';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';

import App from './pages/App';

// first define your request and response body
export interface HttpBinRequest {
  [propName: string]: any;
}
export interface HttpBinResponse {
  [propName: string]: any;
}

render(
  <IconSettings iconPath='/icons'>
    <App />
  </IconSettings>,
  document.getElementById('main'),
);
