/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import React from "react";
import ListItem from "./index";

describe("Testing Element ListItem", () => {
  const setup = () => {
    const { container } = render(
      <ListItem
        cover="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED"
        title="Books"
        author="Yayak Yogi"
        qty={3}
        price={25000}
        total={26000}
      />
    );

    const listitem = container.querySelector(".listitem");

    return {
      listitem,
    };
  };

  test("Should show image,author,title,qty and date on screen", () => {
    const { listitem } = setup();

    expect(listitem).toBeInTheDocument();
    expect(listitem).toHaveTextContent("Books");
    expect(listitem).toHaveTextContent("Yayak Yogi");
    expect(listitem).toHaveTextContent(3);
    expect(listitem).toHaveTextContent("25.000");
    expect(listitem).toHaveTextContent("26.000");
  });
});
