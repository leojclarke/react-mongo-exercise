import React from 'react';
import Tag from './Tag';

export default function Card({ card }) {
  const { title, description, tags } = card;
  return (
    <li>
      {title}
      {description}
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </li>
  );
}
