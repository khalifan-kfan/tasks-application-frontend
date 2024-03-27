import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import TaskCard from './taskCard';

describe('TaskCard component', () => {
  const mockTask = {
    _id: '1',
    title: 'Task 1',
    author: 'Author 1',
  };

  it('renders task title and author', () => {
    render(
      <MemoryRouter> {/* Wrap the component with MemoryRouter */}
        <TaskCard task={mockTask} />
      </MemoryRouter>
    );
    const titleElement = screen.getByText('Task 1'); 
    expect(titleElement).toBeInTheDocument();
  });
});
