import { useState } from "react";
import Filtered from "./Filtered";
import ShowTasks from "./ShowTasks";
import TaskForm from "./TaskForm";
import Title from "./Title";

const TaskApp = () => {
  const [taskList, setTaskList] = useState([]);
  const [selected, setSelected] = useState("All");

  const addTaskHandler = (task) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      task: task,
      iscompleted: false,
    };
    setTaskList([...taskList, newTask]);

  };

  const deleteHandler = (id) => {
    const filtered = taskList.filter((itm) => itm.id !== id);
    setTaskList(filtered);
  };

  const statusHandler = (e) => {
    if (e.target.checked) {
      const index = taskList.findIndex((itm) => itm.id == e.target.value);
      const updatedItem = { ...taskList[index] };
      updatedItem.iscompleted = !updatedItem.iscompleted;
      const upadateTaskList = [...taskList];
      upadateTaskList[index] = updatedItem;
      setTaskList(upadateTaskList);
    } else {
      const index = taskList.findIndex((itm) => itm.id == e.target.value);
      const updatedItem = { ...taskList[index] };
      updatedItem.iscompleted = !updatedItem.iscompleted;

      const upadateTaskList = [...taskList];
      upadateTaskList[index] = updatedItem;
      setTaskList(upadateTaskList);
    }
  };

  const filteredHandler = (value) => {
    switch (value.value) {
      case "isCompelted":
         setTaskList(taskList.filter((itm)=>itm.iscompleted))
          break;

      case "NotCompleted":
          setTaskList(taskList.filter((itm)=>!itm.iscompleted))
          break;
 
     default:
      setTaskList(taskList)
      //    break;
 }
  };

  return (
    <section className=" container absolute top-0 left-0 right-0 text-white ">
      <section className=" py-2 w-1/2 border-2 border-yellow-200 shadow-md rounded mx-auto mt-[2%] px-2 bg-white bg-opacity-20">
        <h1 className=" text-center font-bold text-xl border-b-2 border-yellow-200  py-1">
          Task List
        </h1>
        <section className="   mx-4 px-2 py-2">
          <Title taskList={taskList} />
          {/* <Filtered filteredHandler={filteredHandler} selected={selected} /> */}
        </section>
        <section>
          <TaskForm addTaskHandler={addTaskHandler} />
        </section>
        <section>
          <ShowTasks
            taskList={taskList}
            deleteHandler={deleteHandler}
            statusHandler={statusHandler}
          />
        </section>
      </section>
    </section>
  );
};

export default TaskApp;
