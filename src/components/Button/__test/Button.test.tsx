import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Button } from "../Button";

describe("Test of button component", () => {
  it("renders report button", () => {
    const { container } = render(<Button />);
    
    expect(container.firstChild).toHaveClass("btn");
  });
});
