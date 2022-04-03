/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render } from "@testing-library/react";
import Title from "./index";

describe("Testing element title", () => {
  test("Should be render title AnekaBooks.", () => {
    const { container } = render(<Title />);
    expect(container.querySelector("h3")).toHaveTextContent("AnekaBooks.");
  });
});
