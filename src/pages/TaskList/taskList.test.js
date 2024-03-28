import React from "react";
import { render } from "@testing-library/react";
import TaskListPage from "./index";
import { MemoryRouter } from "react-router-dom";


describe("TaskListPage component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <TaskListPage />
      </MemoryRouter>
    );
  });

});
