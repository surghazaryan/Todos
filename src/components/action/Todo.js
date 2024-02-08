import React, { useState } from "react";
import { editTodo, deleteTodo } from "./actions";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdSave } from "react-icons/md";


const Todo = ({ id, title }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setnewTitle] = useState(title);
  const dispatch = useDispatch();
  const handleTodo = () => {
    if (newTitle.trim()) {
      dispatch(editTodo({ id: id, title: newTitle }));
      setEditing(false);
    }
  };
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      {editing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => {
              setnewTitle(e.target.value);
            }}
          />
          <button onClick={handleTodo}>
            <MdSave />
          </button>
        </div>
      ) : (
        <div className="todo">
          <p>{title}</p>
          <div>
            <button onClick={() => setEditing(true)}>
              <MdEdit />
            </button>
            <button onClick={handleDelete}>
              <MdDelete />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
