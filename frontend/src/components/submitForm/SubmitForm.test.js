import { render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

test("Renders Submit Article Page", async () => {
  render(<App />);
  const user = userEvent;
  const navigateSubmitPage = screen.getByRole("button", {
    name: /Submit Article/i,
  });
  await user.click(navigateSubmitPage);
  const submitScreen = screen.getByRole("heading", {
    level: 1,
    name: /Submit Article/i,
  });
  expect(submitScreen).toBeInTheDocument();
});

test("Successful user input in text fields", async () => {
  render(<App />);
  const user = userEvent;
  const navigateSubmitPage = screen.getByRole("button", {
    name: /Submit Article/i,
  });
  await user.click(navigateSubmitPage);
  const titleInput = screen.getByPlaceholderText(/Title/i);
  await user.type(titleInput, "testTitle");
  expect(titleInput).toHaveValue("testTitle"); 
});

test("Select an input format", async () => {
  render(<App />);
  const user = userEvent;
  const navigateSubmitPage = screen.getByRole("button", {
    name: /Submit Article/i,
  });
  await user.click(navigateSubmitPage);
  const select = screen.getByDisplayValue("Select a Upload Format");
  await user.click(select[2]);
  expect(select[2]).toHaveValue("bibtex");
});
