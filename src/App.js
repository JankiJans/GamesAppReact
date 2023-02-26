import GameForm from './components/GameForm/GameForm';
import GamesList from './components/GamesList/GamesList';
import { useState } from 'react';
import shortid from 'shortid';

const App = () => {

  const [games, setGames] = useState([
    { id: 1, title: 'The Witcher', category: 'RPG' },
    { id: 2, title: 'Counter Strike', category: 'action' },
  ]);

  const removeGame = Gameid => { //funckcja usuwająca książkę z listy
    setGames(games.filter(game => game.id !== Gameid)); //przypisujemy do stanu nową tablicę, która zawiera wszystkie książki z wyjątkiem tej, którą chcemy usunąć 
  };

  const addGame = newGame => { //funkcja dodająca książkę do listy
    setGames([...games, { id: shortid(), title: newGame.title, category: newGame.category}]);
  };


  return (
    <div>
      <h1>Games App</h1>
      <GamesList games={games} removeGame={removeGame} />
      <GameForm addGame={addGame} />
    </div>
  );
}
export default App;
