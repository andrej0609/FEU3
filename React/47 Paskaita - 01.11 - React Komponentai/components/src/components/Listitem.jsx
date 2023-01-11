const ListItem = (props) => {
  return (
    <li>
      <img src={props.imageUrl} alt='A description of the image' />
    </li>
  );
}

export default ListItem;