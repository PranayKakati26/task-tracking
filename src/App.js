import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointement",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting",
      day: "Feb 6th at 12:30pm",
      reminder: true,
    },
    // ,
    // {
    //   id: 3,
    //   text: "Gym",
    //   day: "Feb 6th at 4:30pm",
    //   reminder: false,
    // },
  ]);

  const addTask = (newTask) => {
    console.log(newTask);
    const id = Math.floor(Math.random() * 10000) + 1;
    const addedTask = { id, ...newTask };
    console.log([...tasks,addedTask]);
    setTasks([addedTask, ...tasks]);
  };


  const deleteTask = (id) => {
    // console.log("delete", id);
    setTasks(tasks.filter((task) => task.id != id));
  };

  const togglReminder = (id) => {
    console.log(id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} btnColor={showAddTask ? 'green' : 'red'} btnText={showAddTask ? 'Add' : 'Close'} />
     {showAddTask && <AddTask addTask={ addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} togglReminder={ togglReminder}/>
      ) : (
        "No Tasks yet"
      )}
     
    </div>
  );
}

export default App;
