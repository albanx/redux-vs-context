
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
