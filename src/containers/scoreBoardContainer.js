import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScoreBoardContainer extends Component {
  constructor(props){
    super(props);

    // state?
    // bind?
  }

  render(){
    return(
      <div className="scoreboard--base">
        <div className="row" data-id="row20s">
          <div className="scoreboard--box"></div>
          <div className="scoreboard--box"></div>
        </div>
        <div className="row" data-id="row19s">
          <div className="scoreboard--box"></div>
          <div className="scoreboard--box"></div>
        </div>
        <div className="row" data-id="row18s">
          <div className="scoreboard--box"></div>
          <div className="scoreboard--box"></div>
        </div>
        <div className="row" data-id="row17s">
          <div className="scoreboard--box"></div>
          <div className="scoreboard--box"></div>
        </div>
        <div className="row" data-id="row16s">
          <div className="scoreboard--box"></div>
          <div className="scoreboard--box"></div>
        </div>
        <div className="row" data-id="row15s">
          <div className="scoreboard--box"></div>
          <div className="scoreboard--box"></div>
        </div>
        <div className="row" data-id="rowbulls">
          <div className="scoreboard--box"></div>
          <div className="scoreboard--box"></div>
        </div>
      </div>
    )
  }
}


export default ScoreBoardContainer;
