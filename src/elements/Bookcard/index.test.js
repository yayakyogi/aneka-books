/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen } from "@testing-library/react";
import Bookcard from "./index";

describe("Testing element Bookcard", () => {
  test("Should render image, author, title and price", () => {
    const { container } = render(
      <Bookcard
        imageUrl="https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita__w150_hauto.jpg"
        author="Yayak Yogi"
        title="Title Books"
        price={25000}
      />
    );

    const bookcard = container.querySelector(".bookcard");
    const imagecard = screen.getByAltText("cover");
    expect(bookcard).toBeInTheDocument();
    expect(imagecard).toHaveAttribute(
      "src",
      "https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita__w150_hauto.jpg"
    );
    expect(bookcard).toHaveTextContent("Yayak Yogi");
    expect(bookcard).toHaveTextContent("Title Books");
    expect(bookcard).toHaveTextContent(25000);
  });
});
