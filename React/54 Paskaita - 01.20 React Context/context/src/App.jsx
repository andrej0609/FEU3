import { useState } from 'react';
import './App.css';
import AddToDo from './komponentai/AddToDo';
import ToDos from './komponentai/ToDos';
function App() {

  const [toDos, setToDos] = useState([
    { id: 1, task: 'Pamiegoti', completed: false },
    { id: 2, task: 'Pažaist', completed: false },
    { id: 3, task: 'Parukyt', completed: false },
  ]);

  const addNewTask = (newTask) => {
    setToDos([...toDos, newTask]);
  }

  const changeTaskState = (id) => {
    setToDos(toDos.map(item =>
      item.id.toString() === id.toString() ? { ...item, completed: !item.completed } : item
    ));
  }

  const deleteTask = (id) => {
    setToDos(toDos.filter(item => item.id.toString() !== id.toString()));
  }



  return (
    <>
      <AddToDo
        addNewTask={addNewTask}
      />
      <ToDos
        data={toDos}
        changeTaskState={changeTaskState}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
