import React, { Component } from 'react';
import { getCards, postNewCard, setLocal, getLocal } from '../services';
import CardsList from './CardsList';
import Form from './Form';

export default class App extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    this.loadCards();
  }

  componentDidUpdate(prevProps, prevState) {
    const { cards } = this.state;
    if (prevState.cards !== cards) {
      setLocal('cards', cards);
    }
  }

  loadCards() {
    getCards()
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error));
  }

  handleSubmit = event => {
    event.preventDefault();
    postNewCard(event)
      .then(newCard =>
        this.setState({
          cards: [newCard, ...this.state.cards],
        })
      )
      .catch(error => console.log(error));
  };

  handleBookmarkToggle = card => {};

  render() {
    const { cards } = this.state;

    return (
      <main>
        <h1>Cards</h1>
        <Form onSubmit={this.handleSubmit} />
        <CardsList cards={cards} />
      </main>
    );
  }
}
