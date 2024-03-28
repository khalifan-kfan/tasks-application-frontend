import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import NotFound from './index';

describe('NotFound component', () => {
  it('contains link to home page', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const linkElement = screen.getByText('Go back to Home');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
