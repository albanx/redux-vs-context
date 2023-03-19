import { AddTodoActionType, RemoveTodoAction, ShowTodoIdActionType } from "./actions";
import { TodoState } from "./state";

export function rootReducer(state: TodoState, action: AddTodoActionType | RemoveTodoAction | ShowTodoIdActionType ): TodoState {
  const { payload, type } = action;

  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        listTodos: [...state.listTodos, payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        listTodos: state.listTodos.filter((todo) => todo.id !== payload.id),
      };
      case "SHOW_MY_ID":
        return {
          ...state,
          myId: payload.id,
          
        };
  }

  return state;
}
