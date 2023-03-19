import { useDispatch, useSelector } from "react-redux";
import logo from "../logo.svg";
import { RootState } from "../store/store";
import { addTodo } from "../store/todoSlice";
import TodoCmp from "./todo";
import Title from "./title";

export const Home = () => {
  const listTodos = useSelector(
    (state: RootState) => state.todoState.listTodos
  );
  const myId = useSelector((state: RootState) => state.todoState.myId);
  const dispatch = useDispatch();

  console.log("rendering HOME");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React with <code>REDUX</code> API.
        </p>
        <Title />
        <button
          onClick={() =>
            dispatch(addTodo({ text: "New Todo", id: Math.random() + "" }))
          }
        >
          Add Todo
        </button>
        <ul>
          {listTodos.map((todo, index) => (
            <TodoCmp key={todo.id} {...todo} />
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
