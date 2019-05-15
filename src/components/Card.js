import React from 'react';
import Tag from './Tag';

export default function Card({ card }) {
  const { title, description, tags } = card;
  return (
    <section className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {tags.map(tag => (
        <Tag key={tag._id}>{tag}</Tag>
      ))}
    </section>
  );
}
