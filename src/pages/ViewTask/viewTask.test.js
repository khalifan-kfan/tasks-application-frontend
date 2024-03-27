import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ViewTaskPage from './index';
import { MemoryRouter } from "react-router-dom";

// // Mock useParams hook
// jest.mock('react-router-dom', () => ({
//   useParams: jest.fn().mockReturnValue({ id: '1' }),
// }));

// // Mock fetch function
// global.fetch = jest.fn().mockResolvedValue({
//   ok: true,
// });

describe('ViewTaskPage component', () => {
    it("renders without crashing", () => {
        render(
          <MemoryRouter>
            <ViewTaskPage />
          </MemoryRouter>
        );
      });

//   it('updates task data when form is submitted', async () => {
//     const { screen } = render(<ViewTaskPage />);
//     const titleInput = screen.getByLabelText('Title');
//     const descriptionInput = screen.getByLabelText('Description');
//     const authorInput = screen.getByLabelText('Author');
//     const deadlineInput = screen.getByLabelText('Deadline');
//     const submitButton = screen.getByText('Create Task');

//     fireEvent.change(titleInput, { target: { value: 'Updated Task 1' } });
//     fireEvent.change(descriptionInput, { target: { value: 'Updated Description 1' } });
//     fireEvent.change(authorInput, { target: { value: 'Updated Author 1' } });
//     fireEvent.change(deadlineInput, { target: { value: '2024-04-09T10:45' } });
//     fireEvent.click(submitButton);

//     // await waitFor(() => {
//     //   expect(fetch).toHaveBeenCalledWith('/api/tasks/1', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //     },
//     //     body: JSON.stringify({
//     //       title: 'Updated Task 1',
//     //       description: 'Updated Description 1',
//     //       author: 'Updated Author 1',
//     //       deadline: '2024-04-09T10:45',
//     //     }),
//     //   });
//     // });
//   });
});
