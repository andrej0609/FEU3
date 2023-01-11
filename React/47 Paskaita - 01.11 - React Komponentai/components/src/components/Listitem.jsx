const ListItem = (props) => {
  return (
    <>
      <li>
        <img src={props.imageUrl} alt='image' />
        <p>{props.text}</p>
      </li>
      <li>
        <img src={props.imageUrl} alt='image' />
        <p>{props.text}</p>
      </li>
      <li>
        <img src={props.imageUrl} alt='image' />
        <p>{props.text}</p>
      </li>
    </>
  );
}

export default ListItem;