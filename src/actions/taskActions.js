import { BASE_URL } from "../config";
const updateTask = async (id, taskData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
      const responseData = await response.json();
      if (response.ok) {
        return responseData;
      } else {
        throw new Error('Failed to update task');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const createTask = async (taskData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
      const responseData = await response.json();
      if (response.ok) {
        return responseData;
      } else {
        throw new Error('Failed to create task');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  

  export { updateTask, createTask };
  