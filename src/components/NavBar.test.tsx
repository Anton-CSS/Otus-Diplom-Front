import React, { FC } from "react";
import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import NavBar from "./NavBar";

describe('NavBar', () =>{
    it('NavBar render', () =>{
      const {getByText} =render(<NavBar/>);

    })
})