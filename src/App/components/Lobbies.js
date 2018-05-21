import React from 'react';

class Lobbies extends React.Component {
  componentDidMount() {
    const { getLobbies, joinLobby, player } = this.props;
    player.lobbyId ? joinLobby(player.lobbyId, player._id) : getLobbies();
    this.interval = setInterval(() => getLobbies(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { player, createLobby, joinLobby } = this.props;
    const { lobbies } = this.props.lobbies;

    return (
      <div className="jumbotron">
        <h1 className="display-4">Chose or create a Game</h1>
        <p className="lead">Welcome {player.pseudo}</p>
        <hr className="my-4" />
        <button className="btn btn-primary" onClick={() => createLobby(player._id)}>Create Lobby</button>
        <hr className="my-4" />
        { lobbies.length > 0 && <ul className="list-group" style={{width: "20%"}}>
          { lobbies.map(lobby => {
            if (lobby !== null) {
              return (
                <li key={lobby._id} className="list-group-item d-flex justify-content-between align-items-center">
                  {lobby.name}
                  { !lobby.full ? <button className="btn btn-secondary" onClick={() => joinLobby(lobby._id, player._id)}>Join</button> :
                  <span className="badge badge-primary badge-pill">full</span> }
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul> }
      </div>
    );
  }
}

export default Lobbies;