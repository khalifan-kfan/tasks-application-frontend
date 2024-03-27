import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TaskListPage from './pages/TaskList';
import NewTaskPage from './pages/NewTask';
import ViewTaskPage from './pages/ViewTask';
import NotFound from './pages/PageNotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskListPage/>} />
        <Route path="/list" element={<TaskListPage/>} />
        <Route path="/new" element={<NewTaskPage/>} />
        <Route path="/view/:id" element={<ViewTaskPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
