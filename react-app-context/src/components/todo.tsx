import { useContext, memo } from "react";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { Stack } from "@fluentui/react";
import { MyAppContext } from "../store/context";
import { Todo } from "../store/state";

export const TodoCmp = (todo: Todo) => {
  const [state, dispatch] = useContext(MyAppContext);
  console.log("rendering TodoCmp");
  return (
    <li key={todo.id}>
      {todo.text}
      <Stack horizontal>
        <DefaultButton
          text="Remove"
          onClick={() =>
            dispatch({ type: "REMOVE_TODO", payload: { id: todo.id } })
          }
        />
        <button onClick={() => dispatch({ type: "SHOW_MY_ID", payload: todo })}>
          Show MY ID
        </button>
      </Stack>
    </li>
  );
};

export default memo(TodoCmp);
