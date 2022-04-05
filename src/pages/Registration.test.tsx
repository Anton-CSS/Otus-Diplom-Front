import React, { FC } from "react";
import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import Registration from "./Registration";
import {Provider} from "react-redux";
import {store} from "../store";
import {MemoryRouter} from "react-router-dom";



describe('Registration', () =>{
    it('Registration', () =>{
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
                    <Registration/>
                </MemoryRouter>
            </Provider>
        );
        expect(getByText('Регистрация')).toBeInTheDocument();
        expect(getByText('Имя пользователя')).toBeInTheDocument();
        expect(getByText('Пароль')).toBeInTheDocument();
        expect(getByText('Зарегистрироваться')).toBeInTheDocument();
        expect(getByRole('button')).toBeInTheDocument();
        expect(getByRole('textbox')).toBeInTheDocument();
    });
})