/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import React from "react";
import { act, fireEvent, render } from "@testing-library/react";
import InputText from "./index";

describe("Testing elements text input", () => {
  // test a email validation error and show error message
  test("Render a email validation error and show error message", async () => {
    const onChange = jest.fn();
    const { getByPlaceholderText, container } = render(
      <InputText type="email" name="email" value="" onChange={onChange} />
    );
    await act(async () => {
      const emailInput = getByPlaceholderText("Please type here ..");
      fireEvent.change(emailInput, { target: { value: "invailid email" } });
      fireEvent.blur(emailInput);
    });
    expect(container.querySelector("span")).toBeInTheDocument();
  });
});
