import { render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

test("Renders Search Article Page", async () => {
  render(<App />);
  const user = userEvent;
  const navigateSearchPage = screen.getByRole("button", {
    name: /Search Articles/i,
  });
  await user.click(navigateSearchPage);
  const searchScreen = screen.getByRole("heading", {
    level: 1,
    name: /Search Articles/i,
  });
  expect(searchScreen).toBeInTheDocument();
});

test("Render of title column in table", () => {
  render(<App />);
  const title = screen.getByRole("columnheader", { name: /Title/i });
  expect(title).toBeInTheDocument();
});

test("Render of volume column in table", () => {
  render(<App />);
  const vol = screen.getByRole("columnheader", { name: /Volume/i });
  expect(vol).toBeInTheDocument();
});

test("Check Rows Render", () => {
  render(<App />);
  const rows = screen.getByRole("rowgroup", { name: "" });
  expect(rows).toBeInTheDocument();
});