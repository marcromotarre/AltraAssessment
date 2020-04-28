import React from 'react';
import { Router } from '@reach/router';
import { useDispatch } from 'react-redux';

import Home from './components/Routes/Home.js';
import ProfessionsFinder from './components/Routes/ProfessionsFinder.js';
import User from './components/Routes/User.js';
import { fetchTown } from './utils/fetch.js';

const App = () => {
  fetchTown(useDispatch());

  return (
    <React.StrictMode>
      {
        <div>
          <Router>
            <Home path="/" />
            <User path="/user/:id" />
            <ProfessionsFinder path="/profession/:name" />
          </Router>
        </div>
      }
    </React.StrictMode>
  );
};

export default App;
