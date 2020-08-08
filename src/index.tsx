import * as React from 'react';
import { render } from 'react-dom';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import App from './pages/App';
import HttpBinApiUtils from './utils/HttpBinApiUtils';

HttpBinApiUtils.doSearch('peter pan', 20);

render(
  <IconSettings iconPath='/icons'>
    <App />
  </IconSettings>,
  document.getElementById('main'),
);
