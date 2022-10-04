import { render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

//sort tests
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

test("Render of title column in table", async () => {
    render(<App />);
    const title = screen.getByRole("columnheader",
    {name: /Title/i});
    expect(title).toBeInTheDocument();
  });

  test("Render of volume column in table", async () => {
    render(<App />);
    const vol = screen.getByRole("columnheader",
    {name: /Volume/i});
    expect(vol).toBeInTheDocument();
  });

  //filter tests
  test("Successful SE practice option selection", async () => {
    render(<App />);
    const user = userEvent;
    const select = screen.getByDisplayValue("Show All SE Practices");
    await user.click(select[2]);
    expect(select[2]).toHaveValue("BDD");
  });

  test("Successful Claim option selection", async () => {
    render(<App />);
    const user = userEvent;
    const select = screen.getByDisplayValue("Show All Claims");
    await user.click(select[2]);
    expect(select[2]).toHaveValue("Detrimental to development");
  });

  test("Successful Start published year option selection", async () => {
    render(<App />);
    const user = userEvent;
    const select = screen.getByDisplayValue("Start Publication Year");
    await user.click(select[2]);
    expect(select[2]).toHaveValue("2021");
  });