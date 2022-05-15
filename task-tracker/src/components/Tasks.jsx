import React from "react";
import tasks from "../tasksdata";

console.log(tasks);

function Tasks() {
    return (
        <>
            {tasks.map((task) => {
                return <h3>{task.text}</h3>;
            })}
        </>
    );
}

export default Tasks;
