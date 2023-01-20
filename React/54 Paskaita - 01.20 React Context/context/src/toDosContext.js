import { createContext, useState } from "react";

const ToDosContext = createContext();

const ToDosProvider = ({ children }) => {

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
      <ToDosContext.Provider value={{
        toDos,
        addNewTask,
        changeTaskState,
        deleteTask
      }}>
        {children}
      </ToDosContext.Provider>
    </>
  )
}

export { ToDosProvider };
export default ToDosContext;