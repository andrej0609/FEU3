import React from 'react';
import Article from './Article';
import data from './data';

function ArticleList(props) {
  const {data} = props;
  return (
    <div className="article-list">
      {data.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          paragraphs={article.paragraphs}
          image={article.image}
          id={article.id}
          status={article.status}
          onMark={props.onMark}
          
        />
      ))}
    </div>
  );
}

export default ArticleList;
