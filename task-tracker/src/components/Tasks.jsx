import React from "react";
import Task from "./Task";

// using destructuring instead of using props in this case
function Tasks({ tasks }) {
    return (
        <>
            {tasks.map((task) => <Task key={task.id} task={ task}/>)}
        </>
    );
}

export default Tasks;
