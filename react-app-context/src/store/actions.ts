export interface Action<T extends string, U> {
  type: T;
  payload: U;
}

export type ActionCreator<
  T extends Action<U, V>,
  U extends string = T["type"],
  V = T["payload"],
> = (payload: V) => T;
export type ActionCreatorWithoutPayload<
  T extends Action<U, undefined>,
  U extends string = T["type"],
> = () => T;

export type AddTodoActionType = Action<"ADD_TODO",  { text: string, id: string }>;
export type RemoveTodoAction = Action<"REMOVE_TODO",  { id: string }>;
export type ShowTodoIdActionType = Action<"SHOW_MY_ID",  { id: string }>;

export const addTodoAction: ActionCreator<AddTodoActionType> = (
  payload
) => ({
  type: "ADD_TODO",
  payload,
});

export const removeTodoAction: ActionCreator<RemoveTodoAction> = (
  payload
) => ({
  type: "REMOVE_TODO",
  payload,
});

export const showTodoIdAction: ActionCreator<ShowTodoIdActionType> = (
  payload
) => ({
  type: "SHOW_MY_ID",
  payload,
});
