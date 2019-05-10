import React, { Component } from 'react';
import { getCards, postNewCard } from '../services';
import CardsList from './CardsList';
import Form from './Form';

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
