import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
    }
  }

  createPlayer() {
    const { username } = this.state;
    this.props.createPlayer(username);
  }

  connection() {
    const { username } = this.state;
    this.props.connection(username);
  }

  render() {
    const { username } = this.state;

    return (
      <div className="jumbotron">
        <h1 className="display-4">Chose a pseudo</h1>
        <div className="form-group">
          <input value={username} onChange={(event) => this.setState({ username: event.target.value })} type="text" className="form-control" />
        </div>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={() => this.createPlayer()}>Create a new player</button>
          <button className="btn btn-secondary" onClick={() => this.connection()}>Connection</button>
        </div>
      </div>
    );
  }
}

export default Login;