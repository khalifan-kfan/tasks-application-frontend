import React from 'react';
import TaskForm from '../../components/TestForm/taskForm';
import { useParams } from 'react-router-dom';
import dummyData from '../../utils/dummyData.json'
// import { useFetchTasks } from '../../hooks/useFetchTasks';

const ViewTaskPage = () => {
  const { id } = useParams();
//   const { data: task, loading, error, fetchData } = useFetchTasks(`/api/tasks/${id}`);

  const handleSubmit = async (taskData) => {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
      if (response.ok) {
        // fetchData(); 
      } else {
        throw new Error('Failed to update task');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {task && <TaskForm onSubmit={handleSubmit} task={task} />} */}
      <TaskForm onSubmit={handleSubmit} task={dummyData.tasks[0]} />
    </div>
  );
};

export default ViewTaskPage;
