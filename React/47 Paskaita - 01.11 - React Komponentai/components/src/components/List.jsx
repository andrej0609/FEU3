import ListItem from "./Listitem";

const List = (props) => {
  return (
    
    <ul>
      {
        props.data.map((item, index) => {
          return <ListItem key={index} data={item} />;
        })}
    </ul>

  );
}

export default List;