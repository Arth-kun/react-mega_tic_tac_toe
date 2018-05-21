// This is the main and only container of the App
// By principle, we use a different container for each view
// But no reason to complicate more the job here
import React from 'react';
import { connect } from 'react-redux'

import Login from '../components/Login';
import Lobbies from '../components/Lobbies';
import Game from '../components/Game';
import { getPlayer, createPlayer, getLobbies, getLobby, createLobby, joinLobby, play, restartGame, leaveLobby } from '../redux/actions';

// We display either Login or Game component weither the user is "logged" or not
class Home extends React.Component {
  render() {
    const player = this.props.player.player;
    const {
      lobbies,
      getPlayer,
      createPlayer,
      getLobbies,
      getLobby,
      createLobby, 
      joinLobby,
      play,
      restartGame,
      leaveLobby,
    } = this.props;

    if (Object.keys(player).length === 0 && player.constructor === Object) {
      return (
        <Login
          connection={getPlayer}
          createPlayer={createPlayer}
        />
      )
    } else if (Object.keys(lobbies.lobby).length === 0 && lobbies.lobby.constructor === Object) {
      return (
        <Lobbies 
          player={player} 
          lobbies={lobbies}
          getLobbies={getLobbies}
          createLobby={createLobby}
          joinLobby={joinLobby}
        />
      )     
    } else {
      return (
        <Game 
          player={player}
          lobby={lobbies.lobby}
          getPlayer={getPlayer}
          getLobby={getLobby}
          play={play}
          restartGame={restartGame}
          leaveLobby={leaveLobby}
        />
      )
    }
  }
}


// Redux part, we get the player logged from the state
const mapStateToProps = state => ({
  player: state.player,
  lobbies: state.lobbies,
});

// We map the dispatch of the two actions to create and connect a player
const mapDispatchToProps = dispatch => ({
  createPlayer: pseudo => dispatch(createPlayer(pseudo)),
  getPlayer: pseudo => dispatch(getPlayer(pseudo)),
  getLobbies: () => dispatch(getLobbies()),
  getLobby: lobbyId => dispatch(getLobby(lobbyId)),
  createLobby: player => dispatch(createLobby(player)),
  joinLobby: (lobbyId, player) => dispatch(joinLobby(lobbyId, player)),
  play: (lobbyId, player, squareClicked) => dispatch(play(lobbyId, player, squareClicked)),
  restartGame: lobbyId => dispatch(restartGame(lobbyId)),
  leaveLobby: (lobbyId, player) => dispatch(leaveLobby(lobbyId, player)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);