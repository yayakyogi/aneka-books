/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import React from "react";
import LoadingContent from "./index";

describe("Testing element loading", () => {
  test("Should be render message Loading data ..", () => {
    const { container } = render(<LoadingContent message="Loading data .." />);
    expect(container.querySelector(".loading")).toHaveTextContent(
      "Loading data .."
    );
  });
});
