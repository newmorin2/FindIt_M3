import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import { vi } from "vitest";
import Signup from "../pages/Signup";

vi.mock("firebase/auth", () => ({
  getAuth: vi.fn(() => ({})),
  signInWithEmailAndPassword: vi.fn(),
  GoogleAuthProvider: vi.fn(),
  signInWithPopup: vi.fn()
}));

test("renders signup page", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
});