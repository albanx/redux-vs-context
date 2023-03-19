import { useReducer } from "react";
import "./App.css";
import { Home } from "./components/home";
import { initialState } from "./store/state";
import { rootReducer } from "./store/reducer";
import { MyAppContext } from "./store/context";
import { DetailsListDocumentsExample } from "./components/list";

function App() {
  const context = useReducer(rootReducer, initialState);
  return (
    <MyAppContext.Provider value={context}>
      <DetailsListDocumentsExample />
      <Home />
    </MyAppContext.Provider>
  );
}

export default App;
