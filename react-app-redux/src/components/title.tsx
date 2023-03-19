import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const Title = () => {
  const myId = useSelector((state: RootState) => state.todoState.myId);
  console.log("rendering title");
  return <h2>{myId}</h2>;
};

export default memo(Title);
