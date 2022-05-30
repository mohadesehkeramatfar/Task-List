import { useState } from "react";

const TaskForm = ({ addTaskHandler }) => {
  const [newTask, setNewTask] = useState("");

  return (
    <section className=" flex flex-col ">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder=" Add New Task"
        className=" w-1/2 mx-auto outline-none border-b-2 px-2 py-1 text-white  bg-none bg-transparent" 
      />
      <button
        className=" mt-4 border-2 rounded w-1/3 mx-auto hover:w-1/2 transition-all duration-200 bg-yellow-200 bg-opacity-50 font-bold "
        onClick={() => addTaskHandler(newTask)}
      >
        Add Task
      </button>
    </section>
  );
};

export default TaskForm;
