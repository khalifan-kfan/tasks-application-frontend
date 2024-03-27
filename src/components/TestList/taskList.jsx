import React from 'react';
import TaskCard from '../TestCard/taskCard';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => {
  return (
    <div className="mx-auto max-w-4xl my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Cool Task List</h2>
        <Link to="/new" className="bg-blue-500 text-white py-2 px-4 rounded">New Task</Link>
      </div>
      <hr className="mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tasks.map(task => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
