import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './components/Root';
render(
  <AppContainer>
    <Root/>
  </AppContainer>,
  document.getElementById('root')
);
if(module.hot){
  module.hot.accept('./components/Root',()=>{
    const NewHello = require('./components/Root').default;
      render(
          <AppContainer>
            <NewHello/>
          </AppContainer>,
          document.getElementById('root')
      );
  })
}