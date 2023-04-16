import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders I was changed on the feature branch link", () => {
  render(<App />);
  const linkElement = screen.getByText(/I was changed on the feature branch/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders I was changed on the feature branch link", () => {
  render(<App />);
  const linkElement = screen.getByText(/I was changed on the feature branch/i);
  expect(linkElement).toBeInTheDocument();
});
