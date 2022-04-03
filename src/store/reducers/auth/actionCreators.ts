import {
  SetAuthAction,
  SetUserAction,
  SetIsLoadingAction,
  SetErrorAction,
  SetClientsAction,
  SetREGAction,
} from "../type";

import { IUser, OneUser } from "../../../models/user";
import { AppDispatch } from "../../index";

export const AuthActionCreators = {
  setUser: (user: OneUser): SetUserAction => ({
    type: "SET_USER_ACTION",
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: "SET_AUTH_ACTION",
    payload: auth,
  }),
  setLoading: (loading: boolean): SetIsLoadingAction => ({
    type: "SET_LOADING_ACTION",
    payload: loading,
  }),
  setReg: (reg: boolean): SetREGAction => ({
    type: "SET_REG_ACTION",
    payload: reg,
  }),
  setError: (error: string): SetErrorAction => ({
    type: "SET_ERROR_ACTION",
    payload: error,
  }),
  setClients: (clients: IUser[]): SetClientsAction => ({
    type: "SET_CLIENTS_ACTION",
    payload: clients,
  }),
  getClients: (token: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setLoading(true));
      const response = await fetch("http://localhost:5000/auth/users", {
        headers: {
          authorization: token,
        },
      });
      const clients: IUser[] = await response.json();
      dispatch(AuthActionCreators.setClients(clients));
      dispatch(AuthActionCreators.setLoading(false));
    } catch (e) {
      dispatch(
        AuthActionCreators.setError(`Server have crashed with error: ${e}`)
      );
    }
  },
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setLoading(true));
        setTimeout(async () => {
          const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({ username, password }),
          });
          const token = await response.json();
          if (token.token) {
            localStorage.setItem("token", token.token);
            dispatch(AuthActionCreators.setUser({ username, password }));
            dispatch(AuthActionCreators.setIsAuth(true));
          } else {
            dispatch(
              AuthActionCreators.setError(
                "Пользователь ввел некоректное имя или пароль"
              )
            );
          }
          dispatch(AuthActionCreators.setLoading(false));
        }, 1000);
      } catch (e) {
        dispatch(
          AuthActionCreators.setError(`Server have crashed with error: ${e}`)
        );
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("token");
    dispatch(AuthActionCreators.setUser({} as OneUser));
    dispatch(AuthActionCreators.setIsAuth(false));
    dispatch(AuthActionCreators.setClients([]));
  },
  checkToken: (token: string | null) => async (dispatch: AppDispatch) => {
    try {
      const response = await fetch("http://localhost:5000/auth/checking", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const result: IUser = await response.json();
      if (result) {
        dispatch(
          AuthActionCreators.setUser({
            username: result.username,
            password: result.password,
          })
        );
        dispatch(AuthActionCreators.setIsAuth(true));
      }
    } catch (e) {
      dispatch(
        AuthActionCreators.setError(`Server have crashed with error: ${e}`)
      );
    }
  },
  registration:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        const response = await fetch(
          "http://localhost:5000/auth/registration",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({ username, password }),
          }
        );
        const result = await response.json();
        if (result) {
          const newResponse = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({ username, password }),
          });
          const token = await newResponse.json();
          if (token.token) {
            localStorage.setItem("token", token.token);
            dispatch(AuthActionCreators.setUser({ username, password }));
            dispatch(AuthActionCreators.setIsAuth(true));
          }
        }
      } catch (e) {
        dispatch(
          AuthActionCreators.setError(`Server have crashed with error: ${e}`)
        );
      }
    },
};
