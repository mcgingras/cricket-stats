import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Components
import App from './components/app';
import Signup from './components/signup';
import GameContainer from './components/gameContainer';
import StatsContainer from './components/statsContainer';
import ScoreBoardContainer from './containers/scoreBoardContainer';

// Reducers
import reducers from './reducers';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/signup/" exact component={Signup} />
        <Route path="/play/" exact component={GameContainer} />
        <Route path="/stats/" exact component={StatsContainer} />
        <Route path="/game/" exact component={ScoreBoardContainer} />
      </div>
    </Router>
  </Provider>
  , document.querySelector('.containers'));
