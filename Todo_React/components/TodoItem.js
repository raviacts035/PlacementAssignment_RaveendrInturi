import React, { useState } from "react";

const TodoItem = ({ todo, dispatch }) => {
  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleToggleTodo = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo });
  };

  const handleEditTodo = () => {
    if (editTitle.trim() === "") return;
    dispatch({
      type: "UPDATE_TODO",
      payload: { id: todo.id, title: editTitle },
    });
    setEditMode(false);
  };

  const handleDeleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: todo });
  };

  return (
    <li className="border-2 border-[#ccc] rounded-lg p-[6px] text-[#fff] text-[14px] font-base whitespace-normal my-[15px] flex md:p-[10px] md:text-[20px] md:my-[20px]">
      {editMode ? (
        <div className="px-[6px] flex flex-row justify-between w-full md:px-[15px]">
          <input
            type="text"
            value={editTitle}
            className="px-[4px] py-[3px] mr-[15px] text-[16px] font-medium outline-none rounded-full text-[#fff] bg-transparent border-2 border-[#c89666] whitespace-normal md:mr-[25px] md:text-[18px] md:px-[10px] md:py-[5px]"
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button
            className="bg-transparent outline-none border-none cursor-pointer text-[25px] text-[#f1af71]"
            onClick={handleEditTodo}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-bookmark-fill" viewBox="0 0 16 16"> 
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/> 
            </svg>
          </button>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between w-full px-2">
          <span
            style={{
              textDecoration: todo.completed ? "line-through red" : "none",
            }}
          >
            {todo.title}
          </span>
          <div className="flex flex-row gap-3">
            <button
              className="bg-transparent outline-none border-none cursor-pointer text-[25px] text-[#32CD32] "
              onClick={handleToggleTodo}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16"> 
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/> 
              </svg>
            </button>
            <button
              className="bg-transparent outline-none border-none cursor-pointer text-[25px] text-[#e2d029]"
              onClick={() => setEditMode(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"> 
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
               </svg>
            </button>
            <button
              className="bg-transparent outline-none border-none cursor-pointer text-[25px] text-[#fa6262] "
              onClick={handleDeleteTodo}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-trash" viewBox="0 0 16 16"> 
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> 
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
               </svg>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
