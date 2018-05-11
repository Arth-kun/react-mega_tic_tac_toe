import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  createPlayer() {
    this.props.createPlayer(this.state.value);
  }

  connection() {
    this.props.connection(this.state.value);
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Chose a pseudo</h1>
        <div className="form-group">
          <input onChange={(event) => this.setState({ value: event.target.value })} type="text" className="form-control" id="inputValid" />
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