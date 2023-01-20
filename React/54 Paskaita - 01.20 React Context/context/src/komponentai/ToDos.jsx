import React, { useContext } from "react";
import ToDo from "./ToDo";
import ToDoContext from "../toDosContext";

const ToDos = () => {

  const { toDos } = useContext(ToDoContext);
  return (
    <>
      {toDos.map((todo, index) =>
        <ToDo
          key={todo.id}
          data={todo}
          index={index}
        />
      )}
    </>
  );
}

export default ToDos;