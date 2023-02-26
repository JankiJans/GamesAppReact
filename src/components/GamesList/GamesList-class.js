import React from 'react';

class GamesList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.games.map((game) => (<li key={game.id}>{game.title} category {game.category}<button onClick={() => this.props.removeGame(game.id)}>Remove</button></li>))}
      </ul>
    );
  }
}

export default GamesList;
