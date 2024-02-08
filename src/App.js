import TodoHeader from "./components/action/TodoHeader";
import TodoListItems from "./components/action/TodoListItems";

function App() {
  return (
    <>
      <div className="container">
        <TodoHeader />
        <TodoListItems />
      </div>
    </>
  );
}

export default App;
