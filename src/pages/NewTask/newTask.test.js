import React from 'react';
import { render } from '@testing-library/react';
import NewTaskPage from './index';


describe('NewTaskPage component', () => {
  it('renders without crashing', () => {
    render(<NewTaskPage />);
  });

 
});
