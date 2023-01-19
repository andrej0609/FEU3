import { Link } from "react-router-dom";


const Cards = ({ data }) => {
  return (
    <>
      <h1>Cards</h1>
      <ul>
        {
          data.map((card) => {
            return (
              <li key={card.id}>
                <Link to={`/cards/card/${card.id}`}>
                  Card {card.id}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </>
  );
}

export default Cards;