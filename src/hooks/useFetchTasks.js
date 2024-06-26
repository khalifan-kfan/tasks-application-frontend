import { useState } from 'react';
import {BASE_URL} from '../config'; 

export const useFetchTasks = (endpoint) => {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`); 
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setTasks(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { tasks, loading, error, fetchData };
};
