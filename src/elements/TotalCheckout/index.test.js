/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import React from "react";
import TotalCheckout from "./index";

describe("Testing Element ListItem", () => {
  const setup = () => {
    const { container } = render(<TotalCheckout total={25000} />);

    const totalCheckout = container.querySelector(".total-checkout");

    return {
      totalCheckout,
    };
  };

  test("Should show image,author,title,qty and date on screen", () => {
    const { totalCheckout } = setup();

    expect(totalCheckout).toBeInTheDocument();
    expect(totalCheckout).toHaveTextContent("25.000");
    expect(totalCheckout).toHaveTextContent("26.000");
  });
});
