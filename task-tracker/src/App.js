import React, { useEffect } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
// to import data from another source
// import tasksData from "./tasksdata";
// importing nanoid 
import { nanoid } from 'nanoid';

export default function App() { 

  // to toggle form based on the add button 
  const [showAddTask,setShowAddTask] = React.useState(false);

  // useState hook for tasks 
  const [tasks, setTasks] = React.useState([])

  // useEffect to get data from api 
  useEffect(() => { 
    const getTasks = async () => { 
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  },[]);
  
  // function to fetch tasks data from api
  const fetchTasks = async () => { 
    const res = await fetch(process.env.REACT_APP_API_URL);
    const data = await res.json();
    return data;
  }

    // function to fetch a single task data from api
    const fetchTask = async (id) => { 
      const res = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
      const data = await res.json();
      return data;
    }

  // function to add Tasks 
  const addTask = async (task) => {
    console.log(task);
    const res = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    });

    // data is the new task added in server
    const data = await res.json();
    console.log(data);

    // Add this newly created task to tasks list 
    setTasks([data,...tasks]);

    // * We don't need to create a new id as the json-server will itself create an id for us
    // const id = nanoid();
    // const newTask = { id, ...task };
    // setTasks([newTask,...tasks]);
  }

  // Delete task 
  const deleteTask = async (id) => { 
    // To delete tasks from server send a delete request
    await fetch(`${process.env.REACT_APP_API_URL}/${id}`,
          {
            method: 'DELETE'
          }
          );

    setTasks(tasks.filter((task)=>task.id !== id));
  }

  // Toggle reminder of tasks 
  const toggleReminder = async (id) => { 
    // To update the tasks reminder based on toggle in api server 
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    // send a put request to update the task in server
    const res = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });
    const data = await res.json();

    // to render updated tasks in frontend
    setTasks(tasks.map((prevTask) => { 
      return prevTask.id === id ?
        {
          ...prevTask,
          reminder: data.reminder
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
