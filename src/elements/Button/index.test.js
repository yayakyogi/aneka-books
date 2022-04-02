/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing button", () => {
  // test button disabled
  test("Should have class bg-gray-200 and text-gray-700", () => {
    const { container } = render(<Button isDisabled></Button>);
    expect(container.querySelector("span.bg-gray-200")).toBeInTheDocument();
    expect(container.querySelector("span.text-gray-700")).toBeInTheDocument();
  });

  // test button Link exsternal
  test("Should render tag <a>", () => {
    const { container } = render(<Button type="link" isExternal></Button>);
    expect(container.querySelector("a")).toBeInTheDocument();
  });

  // test button loading
  test("Should render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>);
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
  });

  // test button link
  test("Should render <Link> component", () => {
    const { container } = render(
      <Router>
        <Button href="/src/pages/ListPage.js" type="link"></Button>
      </Router>
    );
    expect(container.querySelector("a")).toBeInTheDocument();
  });
});
