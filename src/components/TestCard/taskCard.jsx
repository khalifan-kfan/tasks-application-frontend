import React from 'react';
import { Link } from 'react-router-dom';

const TaskCard = ({ task }) => {
  // Function to generate a random light bg color
  const randomColor = () => {
    const letters = 'BCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  const cardStyle = {
    backgroundColor: randomColor(),
  };

  return (
    <Link to={`/view/${task._id}`}>
    <div style={cardStyle} className=" rounded-lg shadow-md overflow-hidden">
      <div >
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4 text-center">{task.title}</h3>
          <p className="text-sm font-medium text-gray-500">Author: <span className="text-xs">{task.author}</span></p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default TaskCard;
