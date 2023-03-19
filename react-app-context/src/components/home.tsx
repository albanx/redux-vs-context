import { useContext } from "react";
import logo from "../logo.svg";
import { MyAppContext } from "../store/context";
import TodoCmp from "./todo";
import Title from "./title";

export const Home = () => {
  const [state, dispatch] = useContext(MyAppContext);

  console.log("rendering HOME");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React with <code>CONTEXT</code> API.
        </p>
        <Title />
        <button
          onClick={() =>
            dispatch({
              type: "ADD_TODO",
              payload: { text: "New Todo", id: Math.random() + "" },
            })
          }
        >
          Add Todo
        </button>
        <ul>
          {state.listTodos.map((todo, index) => (
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
