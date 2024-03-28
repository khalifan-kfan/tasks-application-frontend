import React, { useEffect, useState } from "react";
import TaskForm from "../../components/TestForm/taskForm";
import { useParams } from "react-router-dom";
import { useFetchSingleTask } from "../../hooks/useFetchSingleTask";
import DotsLoader from "../../components/DotsLoader";
import { updateTask } from "../../actions/taskActions";

const ViewTaskPage = () => {
  const { id } = useParams();
  const [updating, setUpdating] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { task, loading, error, fetchTask } = useFetchSingleTask(`api/tasks`, id);
  useEffect(() => {
    fetchTask();
  }, [id]);

  const handleUpdate = async (taskData) => {
    try {
      setUpdating(true); 
      const response = await updateTask(id, taskData);
      console.log(response);
      if (response) {
        window.location.reload(); 
      } else {
        throw new Error('Failed to update task');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message); 
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="p-[1rem] w-[100%] h-screen">
      {loading && (
        <div className="w-[100%] flex items-center flex-col justify-center">
          <DotsLoader />
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div className="w-[100%] flex items-center flex-col justify-center">
          Error: {error}
        </div>
      )}
      {errorMessage && (
        <div className="w-[100%] flex items-center flex-col justify-center">
          Error: {errorMessage}
        </div>
      )}
      {task && <TaskForm onSubmit={handleUpdate} task={task} loading={updating} />}
    </div>
  );
};

export default ViewTaskPage;
