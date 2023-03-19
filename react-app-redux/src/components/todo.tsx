import { memo } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, showTodoID, Todo } from "../store/todoSlice";

export const TodoCmp = (todo: Todo) => {
  const dispatch = useDispatch();
  console.log("rendering TodoCmp");
  return (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
      <button onClick={() => dispatch(showTodoID(todo.id))}>Show MY ID</button>
    </li>
  );
};

export default memo(TodoCmp);
