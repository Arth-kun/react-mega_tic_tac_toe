import React from 'react';
import { connect } from 'react-redux'

import Login from '../components/Login';
import Game from '../components/Game';
import { getPlayer, createPlayer } from '../redux/actions';

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

const mapStateToProps = state => ({
  player: state.player
});

const mapDispatchToProps = dispatch => ({
  createPlayer: (pseudo) => dispatch(createPlayer(pseudo)),
  connection: (pseudo) => dispatch(getPlayer(pseudo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);