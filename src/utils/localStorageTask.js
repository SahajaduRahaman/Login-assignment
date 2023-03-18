const TASKS = "tasks";

const getAllTask = () => {
  const tasks = JSON.parse(localStorage.getItem(TASKS)) || {};
  return tasks;
};

export const getUserAllTask = (email) => {
  const tasks = getAllTask();
  const userTasks = tasks[email] || null;
  return userTasks;
};

export const setTask = (email, tasks) => {
  const allTask = getAllTask();
  const userTasks = getUserAllTask(email) || [];
  const newTasks = { ...allTask, [email]: [...userTasks, tasks] };
  localStorage.setItem(TASKS, JSON.stringify(newTasks));
};
