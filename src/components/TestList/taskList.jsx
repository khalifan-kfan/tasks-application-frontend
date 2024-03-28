import React, { useEffect } from "react";
import TaskCard from "../TestCard/taskCard";
import { Link } from "react-router-dom";
import { useFetchTasks } from "../../hooks/useFetchTasks";
import DotsLoader from "../../components/DotsLoader";
const TaskList = () => {
  const { tasks, loading, error, fetchData } = useFetchTasks("api/tasks");

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-4xl my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Cool Task List</h2>
        <Link to="/new" className="bg-blue-500 text-white py-2 px-4 rounded">
          New Task
        </Link>
      </div>
      <hr className="mb-4" />
      {loading && <div className="w-[100%] flex items-center justify-center"><DotsLoader /></div>}
      {error && <div className="w-[100%] flex items-center justify-center text-red-500">Error: {error}</div>}
      {tasks?.data?.length > 0 && !loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tasks?.data?.map((task) => (
            <TaskCard key={task._id.$oid} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
