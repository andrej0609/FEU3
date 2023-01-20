import React, { useContext } from 'react';
import ToDoContext from '../toDosContext';

const ToDo = ({ data, index }) => {
  const { changeTaskState, deleteTask } = useContext(ToDoContext);

  return (
    <>
      <div>
        <h1>Task {index} : {data.task}</h1>
        <p>Task is {data.completed ? 'is copmlited' : 'needs to be done'}.</p>
        <button onClick={() => changeTaskState(data.id)}>
          {data.completed ? 'Mark as not completed' : 'Mark as completed'}
        </button>
        <button onClick={() => deleteTask(data.id)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default ToDo;