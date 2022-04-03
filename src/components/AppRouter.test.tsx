import React, { FC } from "react";
import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import AppRouter from "./AppRouter";

describe('AppRouter', () =>{
    it('AppRouter render', () =>{
    const {} = render(<AppRouter/>)
    })
})