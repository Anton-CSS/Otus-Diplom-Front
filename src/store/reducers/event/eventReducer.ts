import { EventAction, EventState } from "../type";

const initialState: EventState = {
  events: [],
  guests: [],
  isLoading: false,
  error: null,
};

export const eventReducer = (
  state = initialState,
  action: EventAction
): EventState => {
  switch (action.type) {
    case "SET_EVENTS":
      return { ...state, events: action.payload };
    case "SET_GUESTS":
      return { ...state, guests: action.payload };
    case "SET_IS_ERROR":
      return { ...state, error: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
