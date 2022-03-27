import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionsCreators } from "../store/reducers/generalActionCreators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionsCreators, dispatch);
};
