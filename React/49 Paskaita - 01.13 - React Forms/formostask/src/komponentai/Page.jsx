import NavBar from "./NavBar";
import Article from "./Article";
import React, { useState } from "react";
import AddArticleForm from "./AddArticleForm";

function Page() {
  const [markedCount, setMarkedCount] = useState(0);

  const [articles, setArticles] = useState([
    {
      id: 1,
      image: "https://picsum.photos/200/300",
      title: "Article 1",
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
      paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
    }, {
      id: 7,
      image: "https://i.picsum.photos/id/582/200/300.jpg?hmac=dU7Y_b9LUlVjAWIZ7AJRvue6QpYvaEkOFbUj75FrFAc",
      title: "Article 2",
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
      paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
    }, {
      id: 7,
      image: "https://i.picsum.photos/id/418/200/200.jpg?hmac=FPLIYEnmfmXtqHPsuZvUzJeXJJbbxMWNq6Evh7mMSN4",
      title: "Article 3",
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
      paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
    }, {
      id: 7,
      image: "https://i.picsum.photos/id/257/200/300.jpg?hmac=j0NVivHS9qSXBGkBOUjchG0Ckt6pje1KSfHsnwtr_8M",
      title: "Article 4",
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
      paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
    }, {
      id: 7,
      image: "https://i.picsum.photos/id/864/200/300.webp?hmac=ojgvzBeCggKLWqHxuCNEQn0SkUOXFyIvkQJ7wclzNcE",
      title: "Article 5",
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
      paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
    }, {
      id: 7,
      image: "https://picsum.photos/seed/picsum/536/354",
      title: "Article 6",
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
      paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
    }, {
      id: 7,
      image: "https://picsum.photos/id/1084/536/354?grayscale",
      title: "Article 7",
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
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

  return (
    <div className="allPage">
      <NavBar markedCount={markedCount} />
      <AddArticleForm handleAddArticle={handleAddArticle} />
      <div className="Box">
        {articles.map(article => (
          <Article
            key={article.id}
            image={article.image}
            title={article.title}
            paragraph1={article.paragraph1}
            paragraph2={article.paragraph2}
            paragraph3={article.paragraph3}
            updateMarkedCount = {updateMarkedCount}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;

