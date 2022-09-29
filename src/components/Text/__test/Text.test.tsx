import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Text } from "../Text";


describe("Test of text component", () => {
  it("renders text component", () => {
    const prop = {id: "1", type: "SPAM", state: "OPEN", message: "sd"};
    const { container } = render(<Text {...prop}/>);
    
    expect(container.firstChild).toHaveClass("text-item");
  });
});
