/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Title from "./index";

describe("Testing element title", () => {
  test("Should be render title AnekaBooks.", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Title />
        </Router>
      </Provider>
    );
    expect(container.querySelector(".title")).toHaveTextContent("AnekaBooks.");
  });
});
