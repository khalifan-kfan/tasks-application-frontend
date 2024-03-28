import { useState } from 'react';
import {BASE_URL} from '../config'; 

export const useFetchSingleTask = (endpoint, id) => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTask = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}/${id}`); 
      if (!response.ok) {
        throw new Error('Failed to fetch task');
      }
      const jsonData = await response.json();
      setTask(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { task, loading, error, fetchTask };
};
