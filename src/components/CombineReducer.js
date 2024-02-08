import { combineReducers } from "redux";
import TodoReducer from "./reducer/TodoReducer";

const reducer = combineReducers({
  todos: TodoReducer,
});

export default reducer;
