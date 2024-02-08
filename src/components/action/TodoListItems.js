import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoListItems = () => {
  const todos = useSelector((state) => {
    return state.todos.todos;
  });
  return (
    <div className="todo-list-items">
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Todo key={todo.id} id={todo.id} title={todo.title} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoListItems;
