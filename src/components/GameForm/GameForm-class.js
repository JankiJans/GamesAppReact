import { useState } from 'react';

class GameForm extends React.Component {
  state = {
    title: '',
    category: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addGame({ title: this.state.title, category: this.state.category });
    this.setState({ ...this.state, title: '', category: '' });
  };

  setTitle = value => {
    this.setState({ ...this.state, title: value });
  }

  setCategory = value => {
    this.setState({ ...this.state, category: value });
  }


  render() {
    const { handleSubmit, setTitle, setCategory } = this;
    const { title, category } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        Category: <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        <button>Add Game</button>
      </form>
    );
  }
}

export default GameForm;
