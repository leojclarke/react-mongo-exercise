import React from 'react';
import Card from './Card';

export default function CardsList({ cards }) {
  return (
    <section className="card-list">
      {cards.map(card => (
        <Card key={card._id} card={card} />
      ))}
    </section>
  );
}
