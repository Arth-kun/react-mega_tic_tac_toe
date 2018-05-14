// This is the main and only container of the App
// By principle, we use a different container for each view
// But no reason to complicate more the job here
import React from 'react';
import { connect } from 'react-redux'

import Login from '../components/Login';
import Game from '../components/Game';
import { getPlayer, createPlayer } from '../redux/actions';

// We display either Login or Game component weither the user is "logged" or not
class Home extends React.Component {
  render() {
    const player = this.props.player.player;
    if (Object.keys(player).length === 0 && player.constructor === Object) {
      return (
        <Login
          connection={this.props.connection}
          createPlayer={this.props.createPlayer}
        />
      )
    } else {
      return <Game player={player} />      
    }
  }
}


// Redux part, we get the player logged from the state
const mapStateToProps = state => ({
  player: state.player
});

// We map the dispatch of the two actions to create and connect a player
const mapDispatchToProps = dispatch => ({
  createPlayer: (pseudo) => dispatch(createPlayer(pseudo)),
  connection: (pseudo) => dispatch(getPlayer(pseudo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);