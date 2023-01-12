const Card = ({data}) => {
  return (
    <div className="card">
      <img src={data.url} alt="Card" />
      <p>{data.text}</p>
    </div>
  );
}


export default Card;