/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./index";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Testing breadcrumb", () => {
  const setup = () => {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "Book Details", pageHref: "" },
    ];

    const { container } = render(
      <Provider store={store}>
        <Router>
          <Breadcrumb data={breadcrumbList} />
        </Router>
      </Provider>
    );

    const breadcrumb = container.querySelector(".breadcrumb");

    return {
      breadcrumb,
    };
  };

  test("Should have <ol> with className breadcrumb and have text Home and Book Details", () => {
    const { breadcrumb } = setup();

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("Home");
    expect(breadcrumb).toHaveTextContent("Book Details");
  });
});
