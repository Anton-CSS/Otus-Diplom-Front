import { AuthActionCreators } from "./auth/actionCreators";
import { EventActionCreators } from "./event/actionCreators";

export const allActionsCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};
