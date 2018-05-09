import React from 'react';
import { connect } from 'react-redux'

import Board from './Board';
import { fetchExamples } from '../redux/actions/index';

class Game extends React.Component {
  componentWillMount() {
    this.props.fetchExamples();
  }

  render() {
    return (
      <div className="game jumbotron">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  fetchExamples: () => dispatch(fetchExamples())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)