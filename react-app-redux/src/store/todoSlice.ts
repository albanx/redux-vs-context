import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
}

export interface TodoState {
  listTodos: Array<Todo>;
  myId: string;
}


const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const arrayLength = 1000;
const stringLength = 10;
let randomStringsArray = [];

for (let i = 0; i < arrayLength; i++) {
  let randomString = '';
  for (let j = 0; j < stringLength; j++) {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomIndex];
  }
  randomStringsArray.push({text: randomString, id: randomString});
}

export const initialState: TodoState = {
  listTodos: randomStringsArray,
  myId: "",
};

export const todoSlice = createSlice({
  name: "todoState",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.listTodos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.listTodos = state.listTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    showTodoID: (state, action: PayloadAction<string>) => {
      state.myId = action.payload;
    },
  },
});

export const { addTodo, removeTodo, showTodoID } = todoSlice.actions;

export default todoSlice.reducer;
