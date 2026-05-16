import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import { vi } from "vitest";

/**
 * Mock Auth Context (IMPORTANT)
 */
vi.mock("../context/AuthContext", () => ({
  useAuth: () => ({
    user: { email: "test@test.com" },
    logout: vi.fn()
  })
}));

test("renders FindIt logo", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  expect(screen.getByText(/FindIt/i)).toBeInTheDocument();
});