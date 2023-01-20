import { useParams } from "react-router-dom";
import styled from "styled-components";

const Card = ({ data }) => {

  const MehStyle = styled.div`
    background-color: red;
    color: white;
    font-size: 1rem;
    font-weight: bold;
  `;

  const { id } = useParams();

  const duomenys = data.find((card) => card.id === Number(id));

  return (
    <>
      <MehStyle>
        <h1>Šios korteles pavadimas: {duomenys.tekstas}</h1>
        <p>Šios kortele id: {duomenys.id}</p>
      </MehStyle>

    </>
  );
}

export default Card;