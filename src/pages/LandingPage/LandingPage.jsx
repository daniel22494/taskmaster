import "./LandingPage.scss";
import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import AddTask from "../../components/AddTask/AddTask";

function LandingPage() {
  const [isDone, setIsDone] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const updateTasksAndStorage = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleAddTask = (newTask) => {
    const updatedTasks = [{ ...newTask, isActive: true }, ...tasks];
    updateTasksAndStorage(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    updateTasksAndStorage(updatedTasks);
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isActive: !task.isActive } : task
    );
    updateTasksAndStorage(updatedTasks);
  };

  return (
    <>
      <div className="header">
        <h1 className="header__content">TaskMaster</h1>
      </div>
      <div className="tasks">
        <AddTask addTask={handleAddTask} />
        <div className="tasks__status">
          <button
            className={`tasks__status-button ${!isDone && "active"}`}
            onClick={() => setIsDone(false)}
          >
            Active
          </button>
          <button
            className={`tasks__status-button ${isDone && "active"}`}
            onClick={() => setIsDone(true)}
          >
            Done
          </button>
        </div>
        <div className="tasks__list">
          {tasks
            .filter((task) => (isDone ? !task.isActive : task.isActive))
            .map((task, index) => (
              <div className="tasks__list-item" key={index}>
                <div>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <p>{task.dueDate}</p>
                </div>
                <div className="actions">
                  <FaCheckSquare onClick={() => toggleTaskStatus(index)} />
                  <FaRegEdit />
                  <MdDeleteForever onClick={() => handleDeleteTask(index)} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
