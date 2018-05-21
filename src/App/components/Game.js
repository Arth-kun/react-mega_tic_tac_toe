import React from 'react';

import Board from './Board';

class Game extends React.Component {
  componentDidMount() {
    const { getLobby, lobby } = this.props;
    this.interval = setInterval(() => getLobby(lobby._id), 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { 
      player,
      lobby,
      play,
      restartGame,
      leaveLobby,
    } = this.props;

    return (
      <div className="game jumbotron">
        <div className="game-board">
          <button className="btn btn-danger" onClick={() => leaveLobby(lobby._id, player._id)}>Leave Lobby</button>
          <hr className="my-4" />
          <Board
            player={player}
            lobby={lobby}
            play={play}
          />
          {lobby.winner &&
            <div>
              <hr className="my-4" />
              <div className="card border-success mb-3">
                <div className="card-header">Game ended</div>
                <div className="card-body">
                  <h4 className="card-title">{lobby.winner === 'draw' ? `It's a draw!` : `${lobby.winner} won!`}</h4>
                  <p className="card-text">You can now press "Play Again"!</p>
                </div>
              </div>
              <hr className="my-4" />
              <button className="btn btn-primary" onClick={() => restartGame(lobby._id)}>Play Again</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Game;