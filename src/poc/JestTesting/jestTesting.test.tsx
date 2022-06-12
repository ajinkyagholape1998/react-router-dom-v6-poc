import React from 'react'
import JestTesting from './jestTesting';
import ReactDom from "react-dom";
import { render, screen } from '@testing-library/react';

test("render the correct content", () => {
    render(<JestTesting />);
    const titleElement = screen.queryByTestId("title")
    expect(titleElement).toBe("Todos")

})