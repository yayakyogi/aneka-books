/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import React from "react";
import { screen, render } from "@testing-library/react";
import InputText from "./index";

describe("Testing elements text input", () => {
  // test text input
  test("Should be can show input value", async () => {
    const onChange = jest.fn();
    render(<InputText name="search" value="books" onChange={onChange} />);
    expect(screen.getByDisplayValue("books")).toBeInTheDocument();
  });
});
