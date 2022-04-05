import React, { FC } from "react";
import {MemoryRouter} from "react-router-dom";
import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import Event from "./Event";
import {Provider} from "react-redux";
import {store} from "../store";

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

        const {getByRole, getByText} = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/', '/login', '/registration']}>
                    <Event />
                </MemoryRouter>
            </Provider>
        );
        expect(getByText('Добавить событие')).toBeInTheDocument();
        expect(getByRole('button')).toBeInTheDocument();
    })
})