import React, { useEffect, useState } from "react";
import TaskCard from "../TestCard/taskCard";
import { Link } from "react-router-dom";
import { useFetchTasks } from "../../hooks/useFetchTasks";
import DotsLoader from "../../components/DotsLoader";
import Pagination from "../../components/Pagination";

const TaskList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState('title');
  const generateFilterQueryString = () => {
    if (!selectedFilter) return "";
    return `&${selectedFilter}=${searchQuery}`;
  };

  const { tasks, loading, error, fetchData } = useFetchTasks(
    `api/tasks?page=${currentPage}${generateFilterQueryString()}`
  );
  useEffect(() => {
    fetchData();
  }, [currentPage, selectedFilter, searchQuery]);

  const nextPage = () => {
    if (tasks.pagination && currentPage < tasks.pagination.total_pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filter) => {
    if (selectedFilter === filter) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(filter);
    }
  };

  return (
    <div className="mx-auto max-w-4xl my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Cool Task List</h2>
        <Link
          to="/new"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          New Task
        </Link>
      </div>
      <hr className="mb-4" />
      <div className="flex flex-col mb-[1rem]">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="mr-2 px-2 py-1 border border-gray-300 rounded"
        />
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedFilter === "title"}
            onChange={() => handleFilterChange("title")}
          />
          <>Title</>
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedFilter === "author"}
            onChange={() => handleFilterChange("author")}
          />
          <>Author</>
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedFilter === "description"}
            onChange={() => handleFilterChange("description")}
          />
          Description
        </label>
      </div>
      {loading && (
        <div className="w-[100%] flex items-center justify-center">
          <DotsLoader />
        </div>
      )}
      {error && (
        <div className="w-[100%] flex items-center justify-center text-red-500">
          Error: {error}
        </div>
      )}
      {tasks?.data?.length > 0 && !loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tasks?.data?.map((task) => (
              <TaskCard key={task._id.$oid} task={task} />
            ))}
          </div>
          {tasks?.pagination && (
            <Pagination
              currentPage={currentPage}
              totalPages={tasks.pagination.total_pages}
              prevPage={prevPage}
              nextPage={nextPage}
              specificPage={(page) => {
                setCurrentPage(page);
              }}
            />
          )}
        </>
      )}
      {tasks?.data?.length === 0 && !loading && !error && (
        <div>No tasks found.</div>
      )}
    </div>
  );
};

export default TaskList;
