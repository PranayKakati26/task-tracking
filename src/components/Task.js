import React from 'react';
import { FaTimes } from "react-icons/fa";

const Task = (props) => {
    // console.log(props.deleteTask);
    return <div className={`task ${props.task.reminder ? 'reminder': ''}`} onDoubleClick={() => props.togglReminder(props.task.id)}>
        <h3>{props.task.text} <FaTimes onClick={() => {
            props.deleteTask(props.task.id);
        }} style={{color:"red", cursor:"pointer"}}/></h3>
        <p>{props.task.day }</p>
  </div>;
};

export default Task;
