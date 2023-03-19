import { useReducer } from "react";
import "./App.css";
import { Home } from "./components/home";
import { initialState } from "./store/state";
import { rootReducer } from "./store/reducer";
import { MyAppContext } from "./store/context";

function App() {
  const context = useReducer(rootReducer, initialState);
  return (
    <MyAppContext.Provider value={context}>
      <Home />
    </MyAppContext.Provider>
  );
}

export default App;
