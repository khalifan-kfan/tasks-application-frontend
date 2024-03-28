import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import Pagination from './index';

describe('Pagination component', () => {
  it('renders correctly with pagination buttons', () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        prevPage={jest.fn()}
        nextPage={jest.fn()}
        specificPage={jest.fn()}
      />
    );

    // Check if the "Previous" button is rendered
    const previousButton = screen.getByText('Previous');
    expect(previousButton).toBeInTheDocument();

    // Check if the "Next" button is rendered
    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeInTheDocument();

    // Check if page numbers are rendered correctly
    for (let i = 1; i <= 5; i++) {
      const pageButton = screen.getByText(i.toString());
      expect(pageButton).toBeInTheDocument();
    }
  });

  it('calls specificPage function when a page number button is clicked', () => {
    const specificPageMock = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        prevPage={jest.fn()}
        nextPage={jest.fn()}
        specificPage={specificPageMock}
      />
    );

    // Click on a page number button
    const pageNumberButton = screen.getByText('3');
    fireEvent.click(pageNumberButton);

    // Check if specificPage function is called with the correct page number
    expect(specificPageMock).toHaveBeenCalledWith(3);
  });

});
