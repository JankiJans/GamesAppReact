const GamesList = ({ games, removeGame }) => {
    return(
        <ul>
            {games.map(game => <li key={game.id}>{game.title} category {game.category}<button onClick={() => removeGame(game.id)}>Remove</button></li>)}
        </ul>
    )
};

export default GamesList;