import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions";


const TodoHeader = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");

  const onAdd = (e) => {
    e.preventDefault();
    if (todoTitle.trim()) {
      const newTodo = {
        title: todoTitle,
      };
      dispatch(addTodo(newTodo));
    }
    setTodoTitle("");
  };
  return (
    <>
      <div className="todo-header">
        <form>
          <input
            type="text"
            placeholder="Add Task"
            value={todoTitle}
            onChange={(e) => {
              setTodoTitle(e.target.value);
            }}
          />
          <button onClick={onAdd}>Add</button>
        </form>
      </div>
    </>
  );
};

export default TodoHeader;
