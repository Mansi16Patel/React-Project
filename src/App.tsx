import React, { ChangeEventHandler, useState } from "react";
import "./App.css";
import Task from "./components/Task";
import Search from './components/Search';

const App = () => {
  const [selectedTitle, setTitle] = useState(1);  // for title
  const [newTask, setNewTask] = useState("");     // for input
  const [search, setSearch] = useState('');      // for search
  const [task, setTask] = useState([
    {
      title: "Humber",
      tasks: ["Task 1", "Task 2", "Task 3"],
      id: 1,
    },
    {
      title: "MERN",
      tasks: ["Lab", "Project", "Quiz"],
      id: 2,
    },
    {
      title: "Java",
      tasks: ["Group Discussion", "Exam", "Assignment"],
      id: 3,
    },
  ]);

  let newTasks = JSON.parse(JSON.stringify(task)); //converting the task array to string

 // Adding a Task
 const handleSubmit = () => {
  newTasks.map((task: { title: string; id: number; tasks: string[] }) => {
    if (task.id === selectedTitle) {
      task.tasks.push(newTask);
    }
    return task;
  });
  setTask(newTasks);
};

// Delete a Task
  const handleDelete = (id: number, index: number) => {
    newTasks.map(
      (tl: { title: string; id: number; tasks: string[] }) => {
        if (tl.id === id) { // if task id matched given id then it will remove it will splice it from the list
          tl.tasks.splice(index, 1);
        }
        return tl;
      }
    );
    setTask(newTasks);
  };

  const filterTask = (title: string) => {
    if (title) {
      setSearch(title);
    } else {
      setSearch('');
    }
  };
  return (
    <div>
      <h1>Task List </h1>
      <h3>
        Total Number Of Task:{" "}
        {task.reduce((total, task) => total + task?.tasks.length, 0)}{/*  reduce all taks from the task array */}
      </h3>
     
      <fieldset>
      <legend><h4>Add Task List</h4></legend>
      <div>
        Select Task Title: 
        <select name="selectedTitle" value={selectedTitle} onChange={(e) => { setTitle(parseInt(e.target.value));}}>
        {task.map(({ id, title }) => (
          <option key={`${title}+${id}`} value={id}>
            {title}
          </option>
        ))}
        </select>
        <br/>
        <input type="text" name="newTask" value={newTask} onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button className="b1" type="button" onClick={handleSubmit}>
          Add Task
        </button>
        
      </div>
          </fieldset>
          <Search filterTasks={filterTask} />
      {/* Map through each tasks*/}
      {task
      .filter((t) => t.title.toLowerCase().includes(search.toLowerCase())).map((task) => (
        <Task key={task.title} onDelete={handleDelete} id={task.id} title={task.title} task={task.tasks}
        />
      ))}
    </div>
  );
};

export default App;


