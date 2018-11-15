import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import scuttlebutt from 'redux-scuttlebutt';

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
const regularStore = createStore(reducers);
// var scuttleStore = createStore(reducers, scuttlebutt({
//   uri: 'http://localhost:3000'
// }))

// <Provider store={createStoreWithMiddleware(reducers)}>

ReactDOM.render(
  <Provider store={regularStore}>
    <Router>
      <div style={{height: "100%"}}>
        <Route path="/" exact component={App} />
        <Route path="/signup/" exact component={Signup} />
        <Route path="/play/" exact component={GameContainer} />
        <Route path="/stats/" exact component={StatsContainer} />
        <Route path="/game/" exact component={ScoreBoardContainer} />
      </div>
    </Router>
  </Provider>
  , document.querySelector('.containers'));
