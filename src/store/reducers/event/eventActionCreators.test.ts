import {EventActionCreators} from './actionCreators';
import {IEvent} from "../../../models/event";

 describe('EventActionCreators', () =>{
     it('EventActionCreators have field setGuests', () => {
         const guests = [{_id: '1', username: 'Anton', password: '1234', roles: ['ADMIN']}]
         expect(EventActionCreators.setGuests).toBeInstanceOf(Function);
         expect(EventActionCreators.setGuests(guests)).toStrictEqual({type: "SET_GUESTS", payload: guests})
     })

     it('EventActionCreators have field setEvents', () => {
         const event: IEvent = {
             author: 'Anton',
             status: "warning",
             guest: "go home",
             date: '2022-03-04',
             description: 'easy'
         };
         const events = [event];
         expect(EventActionCreators.setEvents).toBeInstanceOf(Function);
         expect(EventActionCreators.setEvents(events)).toStrictEqual({type: "SET_EVENTS", payload: events})
     })

     it('EventActionCreators have field  setIsEvLoading', () => {
         const boolean = true;
         expect(EventActionCreators.setIsEvLoading).toBeInstanceOf(Function);
         expect(EventActionCreators.setIsEvLoading(boolean)).toStrictEqual({type: "SET_IS_LOADING", payload: boolean})
     });

 })