import React, { useState, useEffect } from "react";
import { setTask as setLocalStorage, getUserAllTask } from "../utils";
import { useData } from "../context";
import DisplayTask from "./DisplayTask";

const CreateTask = () => {
  const {
    state: { user },
  } = useData();

  const [task, setTask] = useState({
    title: "",
    task: "",
  });

  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    setAllTasks(getUserAllTask(user.email) || []);
  }, [user.email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalStorage(user.email, task);
    setAllTasks((prev) => [...prev, task]);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="create-task">
      <form onSubmit={handleSubmit}>
        <div className="task-title">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            className="input"
            placeholder="Enter title "
            name="title"
            value={task.title}
            onChange={handleInput}
          />
        </div>

        <div className="task-des">
          <label htmlFor="task">Task : </label>
          <input
            type="text"
            id="task"
            className="input"
            placeholder="Enter task"
            name="task"
            value={task.task}
            onChange={handleInput}
          />
        </div>

        <button>Submit</button>
      </form>
      <DisplayTask allTasks={allTasks} />
    </div>
  );
};

export default CreateTask;
