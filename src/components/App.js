import React, { Component } from 'react';
import { getCards } from '../services';
import CardsList from './CardsList';

export default class App extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    this.loadCards();
  }

  loadCards() {
    getCards()
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error));
  }

  render() {
    const { cards } = this.state;

    return (
      <main>
        <h1>Cards</h1>
        <CardsList cards={cards} />
      </main>
    );
  }
}
