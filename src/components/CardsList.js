import React from 'react';
import Card from './Card';

export default function CardsList({ cards }) {
  return (
    <ul>
      {cards.map(card => (
        <Card key={card._id} card={card} />
      ))}
    </ul>
  );
}
