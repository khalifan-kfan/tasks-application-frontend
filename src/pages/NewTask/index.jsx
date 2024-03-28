import React, { useState } from 'react';
import TaskForm from '../../components/TestForm/taskForm';
import { createTask } from '../../actions/taskActions';

const NewTaskPage = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); 

  const handleSubmit = async (taskData) => {
    try {
      setLoading(true); 
      taskData.creation_date = new Date().toISOString();
      const response = await createTask(taskData);
      console.log(response);
      if (response) {
        window.location.href= '/'; 
      } else {
        throw new Error('Failed to create task');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {errorMessage && ( 
        <div className="w-[100%] flex items-center flex-col justify-center">
          Error: {errorMessage}
        </div>
      )}
      <TaskForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default NewTaskPage;
