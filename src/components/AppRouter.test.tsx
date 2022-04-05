import React, { FC } from "react";
import {MemoryRouter} from "react-router-dom";
import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import AppRouter from "./AppRouter";
import {Provider} from "react-redux";
import {store} from "../store";

describe('AppRouter', () =>{
    it('AppRouter render', () =>{
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
        const {getByRole} = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/', '/login', '/registration']}>
                    <AppRouter/>
                </MemoryRouter>
            </Provider>
           )
        expect(getByRole('textbox')).toBeInTheDocument();
        expect(getByRole('textbox')).toHaveTextContent('');
        expect(getByRole('textbox')).toHaveClass('ant-input');
    })
})