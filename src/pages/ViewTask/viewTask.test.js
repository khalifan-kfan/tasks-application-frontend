import React from 'react';
import { render } from '@testing-library/react';
import ViewTaskPage from './index';
import { MemoryRouter } from "react-router-dom";



describe('ViewTaskPage component', () => {
    it("renders without crashing", () => {
        render(
          <MemoryRouter>
            <ViewTaskPage />
          </MemoryRouter>
        );
      });


});
