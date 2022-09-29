import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Reports } from "../Reports";

describe("Test of button component", () => {
  it("renders report button", () => {
    const { container } = render(<Reports />);
    
    expect(container.firstChild).toHaveClass("report");
  });
});
