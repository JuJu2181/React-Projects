import React from "react";
import { FaTimes } from 'react-icons/fa';

function Task({ task, onDelete, onToggle}) {

    // styles for cross icon
    const iconStyles = {
        color: 'red',
        cursor: 'pointer',
    };

    return (
        <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={iconStyles} onClick={ ()=>onDelete(task.id)}/></h3>
            <p>{ task.date }</p>
        </div>
    );
}

export default Task;
