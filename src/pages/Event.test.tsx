import React from "react";
import Event from "./Event";
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import {Provider} from "react-redux";
import {store} from "../store";
;

describe('Event', () =>{
    it('Event renders', () =>{
        const {getByText} = render(<Provider store={store}>
            <Event/>
        </Provider>)
    })
})
