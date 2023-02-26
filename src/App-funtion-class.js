import GameForm from './components/GameForm/GameForm';
import GamesList from './components/GamesList/GamesList';
import React, { useState } from 'react';
import shortid from 'shortid';

class App extends React.Component {

  state = {
    games: [
      { id: 1, title: 'The Witcher', category: 'RPG' },
      { id: 2, title: 'Counter Strike', category: 'action' }
    ]
  };

   removeGame = Gameid => { //funckcja usuwająca książkę z listy
    this.setState({ games: this.state.games.filter(game => game.id !== Gameid) }); //przypisujemy do stanu nową tablicę, która zawiera wszystkie książki z wyjątkiem tej, którą chcemy usunąć 
  };

 addGame = newGame => { //funkcja dodająca książkę do listy
    this.setState({games: [...this.state.games, { id: shortid(), title: newGame.title, category: newGame.category}] });
  };

  render() {

    const { games } = this.state;
    const { removeGame, addGame } = this;

    return (
      <div>
        <h1>Games App</h1>
        <GamesList games={games} removeGame={removeGame} />
        <GameForm addGame={addGame} />
      </div>
    );
  }
}
export default App;
