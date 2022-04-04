import App from './App';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import {store} from "../store";
import {MemoryRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import React from "react";
import userEvent from "@testing-library/user-event";

describe('App', () =>{
    it('App render', () =>{
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
        const {getByRole, getByText, getByTestId} = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <AppRouter/>
                </MemoryRouter>
            </Provider>
        );

        const passwordInput = getByTestId('passwordInput');
        expect(getByText('Войти')).toBeInTheDocument();
        expect(getByRole('textbox')).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    })
})