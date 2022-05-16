import React from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
// to import data from another source
import tasksData from "./tasksdata";

export default function App() { 

  // useState hook for tasks 
  const [tasks, setTasks] = React.useState(tasksData)

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
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ toggleReminder}/> : 'You are all caught up for now.'}
    </div>
  );
}
