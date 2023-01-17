import NavBar from "./NavBar";
import Article from "./Article";
import React, { useState } from "react";
import AddArticleForm from "./AddArticleForm";


function Content() {
  const [markedCount, setMarkedCount] = useState(0);

  const [articles, setArticles] = useState([
    {
      id: 1,
      image: "https://picsum.photos/200/300",
      title: "Article 1",
      paragraph1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias explicabo sed vero totam minima esse ut, possimus consequuntur maxime molestiae.",
      paragraph2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      paragraph3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    }, {
      id: 2,
      image: "https://picsum.photos/200/301",
      title: "Article 2",
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      paragraph2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias explicabo sed vero totam minima esse ut, possimus consequuntur maxime molestiae.",
      paragraph3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    }, {
      id: 3,
      image: "https://picsum.photos/200/302",
      title: "Article 3",
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
      paragraph3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias explicabo sed vero totam minima esse ut, possimus consequuntur maxime molestiae."
    }, {
      id: 4,
      image: "https://picsum.photos/200/304",
      title: "Article 4",
      paragraph1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias explicabo sed vero totam minima esse ut, possimus consequuntur maxime molestiae.",
      paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
      paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
    }, {
      id: 5,
      image: "https://picsum.photos/200/305",
      title: "Article 5",
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      paragraph2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias explicabo sed vero totam minima esse ut, possimus consequuntur maxime molestiae.",
      paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
    }, {
      id: 6,
      image: "https://picsum.photos/seed/picsum/536/354",
      title: "Article 6",
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
      paragraph3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias explicabo sed vero totam minima esse ut, possimus consequuntur maxime molestiae."
    }, {
      id: 7,
      image: "https://picsum.photos/id/1084/536/354?grayscale",
      title: "Article 7",
      paragraph1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias explicabo sed vero totam minima esse ut, possimus consequuntur maxime molestiae.",
      paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
      paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
    }
  ]);

  const handleAddArticle = (newArticle) => {
    setArticles([...articles, newArticle]);
  }

  function updateMarkedCount(isMarked) {
    if (isMarked) {
      setMarkedCount(markedCount - 1);
    }
    else {
      setMarkedCount(markedCount + 1);
    }
  }

  const disconnect = () => {
    localStorage.removeItem("userData");
  };

  return (
    <div className="Page">
      <NavBar markedCount={markedCount}
        disconnect={disconnect}
      />
      <AddArticleForm handleAddArticle={handleAddArticle} />
      <div className="Cards">
        {articles.map(article => (
          <Article
            key={article.id}
            article={article}
            image={article.image}
            title={article.title}
            paragraph1={article.paragraph1}
            paragraph2={article.paragraph2}
            paragraph3={article.paragraph3}
            updateMarkedCount={updateMarkedCount}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;