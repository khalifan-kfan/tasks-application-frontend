import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import TaskList from './taskList';

const mockTasks = [
  { _id: '1', title: 'Task 1', author: 'Author 1' },
  { _id: '2', title: 'Task 2', author: 'Author 2' },
];

describe('TaskList component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <TaskList tasks={mockTasks} />
      </MemoryRouter>
    );
  });
});
