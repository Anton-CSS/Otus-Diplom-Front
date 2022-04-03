import { IUser, OneUser } from "../../models/user";
import { IEvent } from "../../models/event";

export interface AuthState {
  isAuth: boolean;
  user: OneUser;
  reg: boolean;
  isLoading: boolean;
  error: string | null;
  clients: IUser[];
}

export interface SetAuthAction {
  type: "SET_AUTH_ACTION";
  payload: boolean;
}

export interface SetREGAction {
  type: "SET_REG_ACTION";
  payload: boolean;
}
export interface SetErrorAction {
  type: "SET_ERROR_ACTION";
  payload: string;
}
export interface SetUserAction {
  type: "SET_USER_ACTION";
  payload: OneUser;
}
export interface SetIsLoadingAction {
  type: "SET_LOADING_ACTION";
  payload: boolean;
}

export interface SetClientsAction {
  type: "SET_CLIENTS_ACTION";
  payload: IUser[];
}

export type AuthAction =
  | SetAuthAction
  | SetIsLoadingAction
  | SetUserAction
  | SetErrorAction
  | SetClientsAction
  | SetREGAction;

export interface EventState {
  guests: IUser[];
  events: IEvent[];
  isLoading: boolean;
  error: string | null;
}

export interface SetGuestsAction {
  type: "SET_GUESTS";
  payload: IUser[];
}

export interface SetEventAction {
  type: "SET_EVENTS";
  payload: IEvent[];
}

export interface SetEventIsLoadingAction {
  type: "SET_IS_LOADING";
  payload: boolean;
}

export interface SetEventErrorAction {
  type: "SET_IS_ERROR";
  payload: string;
}

export type EventAction =
  | SetEventErrorAction
  | SetEventIsLoadingAction
  | SetEventAction
  | SetGuestsAction;
