import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Browser Router to controll routes
import {BrowserRouter} from 'react-router-dom'
//Redux to controll global states
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}/`} >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
