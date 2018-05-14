import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  render() {
    const { createPlayer, connection } = this.props;
    const { value } = this.state;

    return (
      <div className="jumbotron">
        <h1>Chose a pseudo</h1>
        <div className="form-group">
          <input onChange={(event) => this.setState({ value: event.target.value })} type="text" className="form-control" id="inputValid" />
        </div>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={() => createPlayer(value)}>Create a new player</button>
          <button className="btn btn-secondary" onClick={() => connection(value)}>Connection</button>
        </div>
      </div>
    );
  }
}

export default Login;