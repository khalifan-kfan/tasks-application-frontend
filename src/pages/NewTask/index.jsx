import React from 'react';
import TaskForm from '../../components/TestForm/taskForm';


const NewTaskPage = () => {


  const handleSubmit = async (taskData) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
      if (response.ok) {
      } else {
        throw new Error('Failed to create task');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewTaskPage;
