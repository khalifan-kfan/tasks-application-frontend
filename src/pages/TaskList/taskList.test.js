import React from "react";
import { render } from "@testing-library/react";
import TaskListPage from "./index";
import { MemoryRouter } from "react-router-dom";

// Mock useFetchTasks hook
// jest.mock('../../hooks/useFetchTasks', () => ({
//   useFetchTasks: jest.fn(() => ({
//     data: [],
//     loading: false,
//     error: null,
//     fetchData: jest.fn(),
//   })),
// }));

//  Mock fetch function
// global.fetch = jest.fn().mockResolvedValue({
//   ok: true,
//   json: () => Promise.resolve([]),
// });

describe("TaskListPage component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <TaskListPage />
      </MemoryRouter>
    );
  });

});
