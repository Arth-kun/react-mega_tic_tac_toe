import React from 'react';

import Square from './Square';
import calculateWinner from '../utils/calculateWinner';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
    this.state = this.initialState;
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';    
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (this.state.squares.find(square => square === null) === undefined) {
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
        {(winner || this.state.squares.find(square => square === null) === undefined) && 
          <button className="btn btn-primary" onClick={() => this.setState(this.initialState)}>Play Again</button>
        }
      </div>
    );
  }
}