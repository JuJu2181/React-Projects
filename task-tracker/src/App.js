import React from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
// to import data from another source
import tasksData from "./tasksdata";

export default function App() { 

  // useState hook for tasks 
  const [tasks, setTasks] = React.useState(tasksData)

  return (
    <div className="container">
      <Header />
      <Tasks tasks={ tasks}/>
    </div>
  );
}
