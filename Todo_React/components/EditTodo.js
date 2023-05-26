import React, { useState } from "react";

const EditTodo = ({ todo, dispatch }) => {
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEditTodo = () => {
    if (editTitle.trim() === "") return;
    dispatch({
      type: "UPDATE_TODO",
      payload: { id: todo.id, title: editTitle },
    });
  };

  return (
    <div>
      <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <button onClick={handleEditTodo}>
        Book Mark icon
      </button>
    </div>
  );
};

export default EditTodo;
