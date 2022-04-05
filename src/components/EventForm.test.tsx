import React, { FC } from "react";
import {MemoryRouter} from "react-router-dom";
import '@testing-library/jest-dom';
import {screen, render, act} from '@testing-library/react';
import EventForm from "./EventForm";
import {Provider} from "react-redux";
import {store} from "../store";
import userEvent from "@testing-library/user-event";

describe('EventForm', () =>{
    it('EventForm render', () =>{
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

        const {getByRole, getByText, getByTestId, getByPlaceholderText} = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/', '/login', '/registration']}>
                    <EventForm fun={() => console.log('fun')}/>
                </MemoryRouter>
            </Provider>
        );

        expect(getByText('Описание события')).toBeInTheDocument();
        expect(getByText('Выберите дату')).toBeInTheDocument();
        expect(getByText('Выберите гостя')).toBeInTheDocument();
        expect(getByText('Создать')).toBeInTheDocument();
        expect(getByRole('button')).toBeInTheDocument();

        const description = getByTestId('description');
        expect(description).toBeInTheDocument();
        expect(description.id).toBe('description');
        expect((description as HTMLInputElement).value).toBe('');
        act(() => {
            userEvent.type(description, 'Hello');
        });
        expect((description as HTMLInputElement).value).toBe('o');

        const date = getByTestId('date');
        expect(date).toBeInTheDocument();
        expect(getByPlaceholderText('Select date')).toBeInTheDocument();
    })
})