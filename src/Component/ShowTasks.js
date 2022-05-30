import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

const ShowTasks = ({ taskList, deleteHandler, statusHandler }) => {
  AOS.init();
  const [status, setStatus] = useState(false);

  return (
    <section className="mb-2">
      {taskList.length === 0 && (
        <p className=" block  text-center mt-5 text-pink-600 font-extrabold">
          There is no task!!!!
        </p>
      )}

      {taskList.map((itm) => {
        return (
          <section>
            <section
              key={itm.id}
              className={
                itm.iscompleted
                  ? " mt-4 flex w-1/2 mx-auto justify-around items-center border-b-2 border-b-yellow-200 decoration-2 underline-offset-2  line-through decoration-pink-600"
                  : " mt-4 flex w-1/2 mx-auto justify-around items-center border-b-2 border-b-yellow-200 "
              }
            >
              <h1 className=" w-full mx-auto mr-6 ">{itm.task}</h1>

              <input
                type="checkbox"
                value={itm.id}
                onChange={statusHandler}
                className=" mr-6 accent-emerald-800 mb-0 border-2 border-red-400 "
              />
              <svg
                onClick={() => deleteHandler(itm.id)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </section>
          </section>
        );
      })}
    </section>
  );
};

export default ShowTasks;
