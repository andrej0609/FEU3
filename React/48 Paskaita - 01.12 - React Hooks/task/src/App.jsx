import './App.css';
import Navbar from './components/NavBar';
import Article from './components/Article';
import React, { useState } from 'react';


function App() {
  const [articles, setArticles] = useState([
    {
      title: 'Article 1',
      paragraphs: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.'],
      image: "https://picsum.photos/200/300",
      key: 1,
      id: 'article1',
      status: false,
    },
    {
      title: 'Article 2',
      paragraphs: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.'],
      image: "https://i.picsum.photos/id/582/200/300.jpg?hmac=dU7Y_b9LUlVjAWIZ7AJRvue6QpYvaEkOFbUj75FrFAc",
      key: 2,
      id: 'article2',
      status: false,
    },
    {
      title: 'Article 3',
      paragraphs: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.'],
      image: "https://i.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4",
      key: 3,
      id: 'article3',
      status: false,
    },
    {
      title: 'Article 4',
      paragraphs: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.'],
      image: "https://i.picsum.photos/id/257/200/300.jpg?hmac=j0NVivHS9qSXBGkBOUjchG0Ckt6pje1KSfHsnwtr_8M",
      key: 4,
      id: 'article4',
      status: false,
    },
    {
      title: 'Article 5',
      paragraphs: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.'],
      image: "https://i.picsum.photos/id/864/200/300.webp?hmac=ojgvzBeCggKLWqHxuCNEQn0SkUOXFyIvkQJ7wclzNcE",
      key: 5,
      id: 'article5',
      status: false,
    },
    {
      title: 'Article 6',
      paragraphs: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.'],
      image: "https://picsum.photos/seed/picsum/536/354",
      key: 6,
      id: 'article6',
      status: false,
    },
    {
      title: 'Article 7',
      paragraphs: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, molestias dolore nulla modi voluptas non quos nam excepturi temporibus perferendis.'],
      image: "https://picsum.photos/id/1084/536/354?grayscale",
      key: 7,
      id: 'article7',
      status: false,
    }
  ]);

  const [markedArticles, setMarkedArticles] = useState(articles.filter(article => article.status).length);

  const handleMark = (id, isMarked) => {
    setArticles(prevArticles => prevArticles.map(article => {
      if (article.id === id) {
        return { ...article, status: isMarked };
      }
      return article;
    }));
    setMarkedArticles(prevMarkedArticles => prevMarkedArticles + (isMarked ? 1 : -1));
  }

  return (
    <div>
      <Navbar markedArticles={markedArticles} />
      <div className="page">
        {articles.map((article, index) => (
          <Article
            key={index}
            {...article}
            onMark={handleMark}
          />
        ))}
      </div>
    </div>
  );
}
export default App;


