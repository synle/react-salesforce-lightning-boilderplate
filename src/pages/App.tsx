import './App.scss';
import React, { useState } from 'react';
import { Button } from '@salesforce/design-system-react';
import Button2 from '@salesforce/design-system-react/components/button';

import HttpBinApiUtils from 'src/utils/HttpBinApiUtils';

const _doWork = async () => {
  const apiResponse = HttpBinApiUtils.doSearch('peter pan', 20);
  if (apiResponse) {
    const result = await apiResponse.result;
    alert(`Server return:
    ${JSON.stringify(result, null, 2)}`);
  }
};

function App() {
  return (
    <div className='App'>
      <div className='mb2'>
        <h1>Hello World - React Salesforce Lightning Boilderplate</h1>
      </div>
      <div>
        <div className='mb2'>
          <Button2 label='Hello Button2' onClick={_doWork} variant='base' />
        </div>
        <div className='mb2'>
          <Button
            iconCategory='utility'
            iconName='download'
            iconPosition='left'
            label='Neutral Icon'
            onClick={(e) => {
              alert('Button is clicked');
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
