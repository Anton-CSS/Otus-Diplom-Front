import {eventReducer} from "./eventReducer";
import {EventState} from "../type";
import {IEvent} from "../../../models/event";

describe('eventReducer', () =>{
    it('eventReducer is working with the field isLoading', () =>{
        const initialState: EventState = {
            events: [],
            guests: [],
            isLoading: false,
            error: null,
        };
        expect(eventReducer(initialState, {type: "SET_IS_LOADING", payload: true})).toStrictEqual({
            events: [],
            guests: [],
            isLoading: true,
            error: null,
        })
    });

    it('eventReducer is working with the field error', () =>{
        const initialState: EventState = {
            events: [],
            guests: [],
            isLoading: false,
            error: null,
        };

        expect(eventReducer(initialState, {type: "SET_IS_ERROR", payload: 'error'})).toStrictEqual({
            events: [],
            guests: [],
            isLoading: false,
            error: 'error',
        })
    });
    it('eventReducer is working with the field events', () =>{
        const event: IEvent = {
            author: 'Anton',
            status: "warning",
            guest: "go home",
            date: '2022-03-04',
            description: 'easy'
        };
        const events = [event];
        const initialState: EventState = {
            events: [],
            guests: [],
            isLoading: false,
            error: null,
        };

        expect(eventReducer(initialState, {type: "SET_EVENTS", payload: events})).toStrictEqual({
            events: events,
            guests: [],
            isLoading: false,
            error: null,
        })
    });
    it('eventReducer is working with the field guest', () =>{
        const guests = [{_id: '1', username: 'Anton', password: '1234', roles: ['ADMIN']}]
        const initialState: EventState = {
            events: [],
            guests: [],
            isLoading: false,
            error: null,
        };

        expect(eventReducer(initialState, {type: "SET_GUESTS", payload: guests})).toStrictEqual({
            events: [],
            guests: guests,
            isLoading: false,
            error: null,
        })
    });
})