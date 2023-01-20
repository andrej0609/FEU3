import React, { useState, useContext } from 'react';
import ToDosContext from '../toDosContext';

const AddToDo = () => {
  const { addNewTask } = useContext(ToDosContext);

  const [newtaskName, setNewTaskName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      task: newtaskName,
      completed: false
    }

    addNewTask(newTask);
    setNewTaskName('');

  }

  return (
    <>
      <h1>Add new task</h1>
      <form onSubmit={submitHandler}>
        <label>
          <input type="text"
            value={newtaskName}
            onChange={(e) => setNewTaskName(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>

    </>
  );
}

export default AddToDo;