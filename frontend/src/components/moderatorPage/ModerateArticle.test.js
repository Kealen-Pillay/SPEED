import { render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

test("Renders Moderator Page", async () => {
  render(<App />);
  const user = userEvent;
  const navigateSearchPage = screen.getByRole("button", {
    name: /Moderate Articles/i,
  });
  await user.click(navigateSearchPage);
  const moderatorScreen = screen.getByRole("heading", {
    level: 1,
    name: /Moderator Page/i,
  });
  expect(moderatorScreen).toBeInTheDocument();
});

test("Checks Approval Status Displays", () => {
  render(<App />);
  const approvalStatusHeading = screen.getByRole("columnheader", {
    name: /Approval Status/i,
  });
  expect(approvalStatusHeading).toBeInTheDocument();
});

test("Checks Credibility Status Displays", () => {
  render(<App />);
  const credibilityStatusHeading = screen.getByRole("columnheader", {
    name: /Credibility/i,
  });
  expect(credibilityStatusHeading).toBeInTheDocument();
});

test("Checks Relevancy Status Displays", () => {
  render(<App />);
  const relevancyStatusHeading = screen.getByRole("columnheader", {
    name: /Relevancy/i,
  });
  expect(relevancyStatusHeading).toBeInTheDocument();
});

test("Checks Rows In Table Displays", () => {
  render(<App />);
  const row = screen.getByRole("rowgroup", { name: "" });
  expect(row).toBeInTheDocument();
});

test("Checks Search Button Displays", () => {
  render(<App />);
  const searchButton = screen.getByRole("button", { name: /Show Results/i });
  expect(searchButton).toBeInTheDocument();
});