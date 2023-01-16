import React, { useState } from 'react';

function AddArticleForm({ handleAddArticle }) {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [paragraph1, setParagraph1] = useState('');
  const [paragraph2, setParagraph2] = useState('');
  const [paragraph3, setParagraph3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddArticle({
      id: Date.now(),
      image,
      title,
      paragraph1,
      paragraph2,
      paragraph3
    });
    setImage('');
    setTitle('');
    setParagraph1('');
    setParagraph2('');
    setParagraph3('');
  }

  return (
    <form className='addNew' onSubmit={handleSubmit}>
      <label>
        Image:
        <input type="text" value={image} onChange={e => setImage(e.target.value)} />
      </label>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Paragraph 1:
        <input type="text" value={paragraph1} onChange={e => setParagraph1(e.target.value)} />
      </label>
      <label>
        Paragraph 2:
        <input type="text" value={paragraph2} onChange={e => setParagraph2(e.target.value)} />
      </label>
      <label>
        Paragraph 3:
        <input type="text" value={paragraph3} onChange={e => setParagraph3(e.target.value)} />
      </label>
      <button type="submit">Add Article</button>
    </form>
  );
}

export default AddArticleForm;