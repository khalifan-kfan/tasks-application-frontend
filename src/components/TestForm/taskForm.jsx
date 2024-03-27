import React, { useState } from 'react';

const TaskForm = ({ onSubmit, task }) => {
  const [formData, setFormData] = useState({
    title: task ? task.title : '',
    description: task ? task.description : '',
    author: task ? task.author : '',
    deadline: task ? task.deadline : '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-center">Create New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium">Title</label>
            <input type="text" id="title" name="title" required className="mt-1 p-2 border rounded w-full" value={formData.title} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium">Description</label>
            <textarea id="description" name="description" required className="mt-1 p-2 border rounded w-full" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block font-medium">Author</label>
            <input type="text" id="author" name="author" required className="mt-1 p-2 border rounded w-full" value={formData.author} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="deadline" className="block font-medium">Deadline</label>
            <input type="datetime-local" id="deadline" name="deadline" required className="mt-1 p-2 border rounded w-full" value={formData.deadline} onChange={handleChange} />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
