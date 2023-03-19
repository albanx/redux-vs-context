import { useContext, memo } from "react";
import { MyAppContext } from "../store/context";
import { Todo } from "../store/state";

export const TodoCmp = (todo: Todo) => {
  const [state, dispatch] = useContext(MyAppContext);
  console.log("rendering TodoCmp");
  return (
    <li key={todo.id}>
      {todo.text}
      <button
        onClick={() =>
          dispatch({ type: "REMOVE_TODO", payload: { id: todo.id } })
        }
      >
        Remove
      </button>
      <button onClick={() => dispatch({ type: "SHOW_MY_ID", payload: todo })}>
        Show MY ID
      </button>
    </li>
  );
};

export default memo(TodoCmp);
