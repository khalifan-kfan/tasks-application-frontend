import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskForm from './taskForm';

// Mock onSubmit function
const mockOnSubmit = jest.fn();

describe('TaskForm component', () => {
  // Test case to check if TaskForm renders without crashing
  it('renders without crashing', () => {
    render(<TaskForm onSubmit={mockOnSubmit} />);
  });

  // Test case to check if TaskForm submits form data on button click
  it('submits form data on button click', () => {
    render(<TaskForm onSubmit={mockOnSubmit} />);
    // Fill in form fields
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByLabelText('Author'), { target: { value: 'Test Author' } });
    fireEvent.change(screen.getByLabelText('Deadline'), { target: { value: '2024-04-08T10:45' } });
    // Click on submit button
    fireEvent.click(screen.getByRole('button', { name: 'Create Task' }));
    // Check if onSubmit function is called with correct form data
    expect(mockOnSubmit).toHaveBeenCalledWith({
      title: 'Test Title',
      description: 'Test Description',
      author: 'Test Author',
      deadline: '2024-04-08T10:45',
    });
  });
});
