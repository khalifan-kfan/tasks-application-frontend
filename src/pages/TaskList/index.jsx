import React from 'react';

import TaskList from '../../components/TestList/taskList';
import dummyData from '../../utils/dummyData.json'
//import { useFetchTasks } from '../../hooks/useFetchTasks';

const TaskListPage = () => {
  //const { data: tasks, loading, error, fetchData } = useFetchTasks('/api/tasks');

  // useEffect(() => {
  //   fetchData(); 
  // }, []);

  return (
    <div>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {tasks && <TaskList tasks={tasks} />} */}
      <TaskList tasks={dummyData.tasks} />

    </div>
  );
};

export default TaskListPage;
