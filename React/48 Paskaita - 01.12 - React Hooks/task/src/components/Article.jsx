import React, { useState } from 'react';

export default function Article({ title, paragraphs, image, key, id, status, onMark }) {
  const [isMarked, setIsMarked] = useState(status);

  const handleMark = () => {
    setIsMarked(!isMarked);
    onMark(id, !isMarked);
  }

  return (
    <div className={`article ${isMarked ? 'marked' : 'not-marked'}`} key={key}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      <button onClick={handleMark}>{isMarked ? 'Unmark' : 'Mark'}</button>
    </div>
  );
}