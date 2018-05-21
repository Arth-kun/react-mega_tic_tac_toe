import React from 'react';

import Square from './Square';

export default class Board extends React.Component {
  constructor() {
    super();

    this.renderSquare = this.renderSquare.bind(this);
  }

  handleClick(i) {
    const { play, player, lobby } = this.props;

    play(lobby._id, player._id, i);
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.lobby.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    const draw = this.state.squares.find(square => square === null) === undefined;
    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else if (draw) {
      status = 'Match nul !';
    }
    else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <hr className="my-4" />
        {(winner || draw) && 
          <button className="btn btn-primary" onClick={() => this.setState(this.initialState)}>Play Again</button>
        }
      </div>
    );
  }
}