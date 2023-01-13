import { useState } from "react";

function Article(props) {
  const [isMarked, setIsMarked] = useState(false);

  function handleClick() {
    setIsMarked(!isMarked);
    props.updateMarkedCount(isMarked);
  }

  return (
    <div id="article" className={isMarked ? "marked-article" : "unmarked-article"} article>
      <img src={props.image} alt={props.title} />
      <div className="articleText">
        <h2>{props.title}</h2>
        <p>{props.paragraph1}</p>
        <p>{props.paragraph2}</p>
        <p>{props.paragraph3}</p>
      </div>
      <button className="btn" onClick={handleClick}>{isMarked ? "Unmark" : "Mark"}</button>
    </div>
  );
}
export default Article;