import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import history from './history';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App history={history}/>
  </Router>,
  document.getElementById('root')
);
