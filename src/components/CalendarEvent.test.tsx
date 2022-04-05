import React, { FC } from "react";
import {MemoryRouter} from "react-router-dom";
import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import CalendarEvent from "./CalendarEvent";
import {Provider} from "react-redux";
import {store} from "../store";
import {IEvent} from "../models/event";

describe('CalendarEvent', () =>{
    it('CalendarEvent render', () =>{
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // deprecated
                removeListener: jest.fn(), // deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
        const event: IEvent = {author: 'Anton', status: "warning", guest: "Andrey", date: '2022.03.04', description: 'easy'}
        const events = [event];
        const {getByRole, getByText} = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/', '/login', '/registration']}>
                    <CalendarEvent events={events}/>
                </MemoryRouter>
            </Provider>
        );
        expect(getByText('2022')).toBeInTheDocument();
        screen.debug();
    })
})