import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateScore } from '../actions'

class ScoreBoardContainer extends Component {
  constructor(props){
    super(props);

    // state?
    this.renderRows = this.renderRows.bind(this);
  }

  renderRows(blocks){
    return blocks.map((block) => {
      return (
        <div className="row">
          <div className="scoreboard--box" onClick={() => this.props.updateScore(block,1)}>{this.props.score[1][block]}</div>
          <div className="scoreboard--box" onClick={() => this.props.updateScore(block,2)}>{this.props.score[2][block]}</div>
        </div>
      )
    })
  }

  render(){
    console.log(this.props);
    return(
      <div className="scoreboard--base">
        <div className="row">
          <div className="scoreboard--title">{this.props.teams[0]}</div>
          <div className="scoreboard--title">{this.props.teams[1]}</div>
        </div>
        {this.renderRows([20,19,18,17,16,15,25])}
        <div className="row">
          <div className="scoreboard--box">{this.props.score[1]['score']}</div>
          <div className="scoreboard--box">{this.props.score[2]['score']}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams,
    score: state.score
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateScore: (hit,team) => dispatch(updateScore(hit,team))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoardContainer);
