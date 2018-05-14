// Main File of the App
// It only render the app to the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './App/redux/configureStore';

// Get the store from another file instead of configuring it there
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// Method used by the setup tool I used to setup the project
registerServiceWorker();
