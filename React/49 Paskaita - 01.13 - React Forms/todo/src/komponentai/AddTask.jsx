import React, { useState } from "react";

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { task: newTask, completed: false }]);
    setNewTask("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  return (
    <div className="addtask">
      <h1>Task Manager</h1>
      <h2>Unfinished Tasks: {tasks.filter(task => !task.completed).length}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          required
        />
        <button className="submit" type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : 'incomplete'}>
            {task.task}
            <div className="buttons">
              <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
              <button className="complete" onClick={() => handleComplete(index)}>Mark as Completed</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTask;