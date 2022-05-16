import React from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
// to import data from another source
import tasksData from "./tasksdata";
// importing nanoid 
import { nanoid } from 'nanoid';

export default function App() { 

  // to toggle form based on the add button 
  const [showAddTask,setShowAddTask] = React.useState(false);

  // useState hook for tasks 
  const [tasks, setTasks] = React.useState(tasksData)

  // function to add Tasks 
  const addTask = (task) => {
    const id = nanoid();
    const newTask = { id, ...task };
    setTasks([newTask,...tasks]);
  }

  // Delete task 
  const deleteTask = (id) => { 
    setTasks(tasks.filter((task)=>task.id !== id));
  }

  // Toggle reminder of tasks 
  const toggleReminder = (id) => { 
    setTasks(tasks.map((prevTask) => { 
      return prevTask.id === id ?
        {
          ...prevTask,
          reminder: !prevTask.reminder
        } :
        prevTask
    }));
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ toggleReminder}/> : 'You are all caught up for now.'}
    </div>
  );
}
