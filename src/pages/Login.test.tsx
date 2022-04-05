import React, { FC } from "react";
import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import Login from "./Login";
import {Provider} from "react-redux";
import {store} from "../store";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";


describe('NavBar', () =>{
    it('NavBar render', () =>{
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
        const {getByText, getByRole, getByTestId} = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/', '/login', '/registration']}>
                    <Login/>
                </MemoryRouter>
            </Provider>
        );
        expect(getByText('Пароль')).toBeInTheDocument();
        expect(getByText('Войти')).toBeInTheDocument();
        expect(getByRole('button')).toBeInTheDocument();
        const passwordInput = getByTestId('passwordInput');
        const userNameInput = getByTestId('userNameInput');
        expect(userNameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });
})