import React from "react";
import Task from "./Task";


const Tasks = ({tasks,deleteTask,togglReminder}) => {
  console.log(tasks);
  

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} togglReminder={togglReminder}/>
      
      ))}
    </>
  );
};

export default Tasks;
