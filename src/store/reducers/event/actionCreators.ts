import {
  SetEventAction,
  SetEventErrorAction,
  SetEventIsLoadingAction,
  SetGuestsAction,
} from "../type";
import { IUser } from "../../../models/user";
import { IEvent } from "../../../models/event";
import { AppDispatch } from "../../index";

export const EventActionCreators = {
  setGuests: (guests: IUser[]): SetGuestsAction => ({
    type: "SET_GUESTS",
    payload: guests,
  }),
  setEvents: (events: IEvent[]): SetEventAction => ({
    type: "SET_EVENTS",
    payload: events,
  }),
  setIsEvLoading: (isLoading: boolean): SetEventIsLoadingAction => ({
    type: "SET_IS_LOADING",
    payload: isLoading,
  }),
  setIsError: (error: string): SetEventErrorAction => ({
    type: "SET_IS_ERROR",
    payload: error,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(EventActionCreators.setIsEvLoading(true));
      const response = await fetch("http://localhost:5000/event/guests");
      const result: IUser[] = await response.json();
      dispatch(EventActionCreators.setGuests(result));
      dispatch(EventActionCreators.setIsEvLoading(false));
    } catch (e) {
      dispatch(EventActionCreators.setIsError(`No guests received`));
      console.log(e);
    }
  },
  fetchEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      dispatch(EventActionCreators.setIsEvLoading(true));
      const response = await fetch("http://localhost:5000/event/addendum", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(event),
      });
      const result: IEvent[] = await response.json();
      dispatch(EventActionCreators.setEvents(result));
      dispatch(EventActionCreators.setIsEvLoading(false));
    } catch (e) {
      console.log(e);
      dispatch(EventActionCreators.setIsError(`Server can't add event`));
    }
  },
  receiveEvents: (userName: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await fetch("http://localhost:5000/event");
      const result: IEvent[] = await response.json();
      const currentUserEvents = result.filter((ev) => ev.author === userName);
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (e) {
      console.log(e);
      dispatch(
        EventActionCreators.setIsError(
          `Server can't receive array of the events`
        )
      );
    }
  },
};
