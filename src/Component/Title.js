const Title = ({ taskList }) => {
  const total = taskList.length;
  const isCompleted = taskList.filter((itm) => itm.iscompleted == true);
  const notCompleted = taskList.filter((itm) => itm.iscompleted == false);

  return (
    <div className=" font-bold text-sm ">
      {total !== 0 ? (
        <section className=" flex flex-col  ">
          <h1 className=" my-2 mx-auto">Number Of List : {total} </h1>

          <section className=" flex justify-between">
            <h1 className=" my-2 text-pink-600">
              Number Of NotCompleted :{notCompleted.length}{" "}
            </h1>
            <h1 className=" my-2 text-emerald-700">
              Number Of Completed :{isCompleted.length}{" "}
            </h1>
          </section>
        </section>
      ) : (
        <section className=" flex flex-col">
          <h1 className=" my-2 mx-auto">Number Of List : 0 </h1>
          <section className="flex justify-between ">
            <h1 className=" my-2 text-pink-600">Number Of NotCompleted :0 </h1>
            <h1 className=" my-2 text-emerald-700 ">Number Of Completed :0</h1>
          </section>
        </section>
      )}
    </div>
  );
};

export default Title;
