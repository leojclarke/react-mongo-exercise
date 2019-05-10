import React, { Component } from 'react'

export default class App extends Component {
  state = {
    cards: [],
  }

  componentDidMount() {
    fetch('/cards')
      .then(res => res.json())
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error))
  }

  render() {
    const { cards } = this.state

    return (
      <main>
        <h1>Cards</h1>
        <ul>
          {cards.map(card => (
            <li key={card._id}>{card.title}</li>
          ))}
        </ul>
      </main>
    )
  }
}
