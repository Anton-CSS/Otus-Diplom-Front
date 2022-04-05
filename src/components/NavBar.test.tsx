import React, { FC } from "react";
import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import NavBar from "./NavBar";
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
        const {getByText} = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/', '/login', '/registration']}>
                    <NavBar/>
                </MemoryRouter>
            </Provider>
        );
        expect(getByText('Register')).toBeInTheDocument();
        expect(getByText('Register')).toHaveClass('user__login');
        userEvent.click(getByText('Register'));
        expect(getByText('Login')).toBeInTheDocument();
    });
})