import React from 'react';
import Tag from './Tag';

export default function Card({ card, onBookmark }) {
  const { title, description, tags } = card;
  return (
    <section className="card">
      <span className="material-icons bookmark">
        {bookmarked ? 'bookmark' : 'bookmark_border'}
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </section>
  );
}
