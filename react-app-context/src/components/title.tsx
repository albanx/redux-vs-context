import { useContext, memo } from "react";
import { MyAppContext } from "../store/context";

export const Title = () => {
  const [state, dispatch] = useContext(MyAppContext);
  console.log("rendering title");
  return <h2>{state.myId}</h2>;
};

export default memo(Title);
