import Card from './Foto.jsx';

const Cards = (props) => {
  return (
    <>
        {
          props.data.map((item, index) => {
            return (
              <Card
                data={item}
                key={index}
              />
            )
          })
        }
    </>
  );
}

export default Cards;