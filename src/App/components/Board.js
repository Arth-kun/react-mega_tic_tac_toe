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
    const { lobby } = this.props;
    const status = 'Next player: ' + (lobby.nextPlayer === 'playerOne' ? 'X' : 'O');

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
      </div>
    );
  }
}