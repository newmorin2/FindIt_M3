import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Signup from "../pages/Signup";

test("renders signup page", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
});