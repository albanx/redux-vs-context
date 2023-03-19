import { memo } from "react";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { Stack } from "@fluentui/react";
import { useDispatch } from "react-redux";
import { removeTodo, showTodoID, Todo } from "../store/todoSlice";

export const TodoCmp = (todo: Todo) => {
  const dispatch = useDispatch();
  console.log("rendering TodoCmp");
  return (
    <li key={todo.id}>
      {todo.text}
      <Stack horizontal>
        <DefaultButton
          title="Remove"
          onClick={() => dispatch(removeTodo(todo.id))}
        />
        <button onClick={() => dispatch(showTodoID(todo.id))}>
          Show MY ID
        </button>
      </Stack>
    </li>
  );
};

export default memo(TodoCmp);
