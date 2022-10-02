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

test("Succesful Submission of completed Fields", async () => {
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
