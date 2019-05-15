import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
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
      <BrowserRouter>
        <main>
          <h1>React Cards App</h1>
          <section className="nav-container">
            <NavLink exact to="/">
              <span className="nav-link">Home</span>
            </NavLink>
            <NavLink exact to="/create">
              <span className="nav-link">Create Card</span>
            </NavLink>
          </section>

          <Switch>
            <Route
              path="/create"
              render={props => <Form onSubmit={this.handleSubmit} {...props} />}
            />
            <Route path="/" render={props => <CardsList cards={cards} />} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
