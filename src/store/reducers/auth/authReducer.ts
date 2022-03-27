import { AuthAction, AuthState } from "../type";
import { IUser, OneUser } from "../../../models/user";

const initialState: AuthState = {
  isAuth: false,
  error: null,
  isLoading: false,
  reg:false,
  user: {} as OneUser,
  clients: [] as IUser[],
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "SET_AUTH_ACTION":
      return { ...state, isAuth: action.payload };
    case "SET_ERROR_ACTION":
      return { ...state, error: action.payload, isAuth: false };
    case "SET_LOADING_ACTION":
      return { ...state, isLoading: action.payload };
    case "SET_USER_ACTION":
      return { ...state, user: action.payload };
    case "SET_CLIENTS_ACTION":
      return { ...state, clients: action.payload };
    case "SET_REG_ACTION":
      return { ...state, reg: action.payload };
    default:
      return state;
  }
};
