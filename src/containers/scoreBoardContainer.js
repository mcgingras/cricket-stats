import React, { Component } from 'react';
import { connect } from 'react-redux';

// <div className="scoreboard--box">{this.props.score[1]['score']}</div>
// <div className="scoreboard--box">{this.props.score[2]['score']}</div>

import { updateScore } from '../actions'

class ScoreBoardContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      gameOver: false,
      winner: null
    }


    this.renderRows = this.renderRows.bind(this);
    this.rows = [20,19,18,17,16,15,25];
  }

  // everytime the score is updated this gets called, making it perfect
  // for checking the score for a winner
  componentDidUpdate(){
    if(!this.state.gameOver){
      const t1 = Object.values(this.props.score[1]);
      const t2 = Object.values(this.props.score[2]);

      const t1Score = t1.pop();
      const t2Score = t2.pop();

      const t1Closed = t1.every((hit) => hit >= 3);
      const t2Closed = t2.every((hit) => hit >= 3);

      if (t1Closed && (t1Score >= t2Score)) {
        // before the game is over we want to submit the scores to db
        this.setState({gameOver: true})
        this.setState({winner: 1})
      }

      if(t2Closed && (t2Score >= t1Score)) {
        this.setState({gameOver: true})
        this.setState({winner: 2})
      }
    }
  }

  /*
  Submits the score once the game is over
  */
  submitScores(){
    console.log(this.props.score[1]);
    const winner = this.props.teams[this.state.winner];
    const id = Math.random().toString(36).substring(7);
    firebase.database().ref('games/' + winner + '/' + id).set(this.props.score[1]);
  }


  renderRows(blocks){
    return blocks.map((block) => {
      return (
        <div className="row">
         <div className={"scoreboard--box scoreboard--box-"+this.props.score[1][block]} onClick={() => this.props.updateScore(block,1)}></div>
         <div className={"scoreboard--box scoreboard--box-"+this.props.score[2][block]} onClick={() => this.props.updateScore(block,2)}></div>
       </div>
      )
    })
  }

  render(){
    const gameOver = this.state.gameOver;
    return(
      <div style={{height: "100%"}}>
      { !gameOver ? (
        <div className="scoreboard--base">
          <div className="header">
            <div className="scoreboard--title">{this.props.score[1]['score']}</div>
            <div className="scoreboard--title">{this.props.gameId}</div>
            <div className="scoreboard--title">{this.props.score[2]['score']}</div>
          </div>
          {this.renderRows(this.rows)}
        </div>
      ) : (
        <div>
        Game Over! Congrats {this.state.winner}
        {this.submitScores()}
        <a href="/">home</a>
        </div>
      )}
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
