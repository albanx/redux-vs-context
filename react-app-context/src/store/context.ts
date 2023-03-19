import { createContext } from "react";
import { initialState, TodoState } from "./state";
import { AddTodoActionType, RemoveTodoAction, ShowTodoIdActionType } from "./actions";

export type TodoTypeContext = [TodoState, React.Dispatch<AddTodoActionType|RemoveTodoAction|ShowTodoIdActionType>];

export const MyAppContext = createContext<TodoTypeContext>([initialState, () => undefined]);