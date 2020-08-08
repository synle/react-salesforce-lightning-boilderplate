import './App.scss';
import React, { useState } from 'react';
import { Button } from '@salesforce/design-system-react';
// import Button from '@salesforce/design-system-react/components/button';

function App() {
  return (
    <div className='App'>
      <div className='mb2'>
        <h1>Hello World - React Salesforce Lightning Boilderplate</h1>
      </div>
      <div>
        <div className='mb2'>
          <Button
            label='Hello Button'
            onClick={(e) => {
              alert('Button is clicked');
            }}
            variant='base'
          />
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
