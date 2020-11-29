import React from "react";
import User from "./User";
import { render, screen, act } from "@testing-library/react";

it("renders user data", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue",
  };

  // TODO: msw
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    } as Response)
  );

  act(() => {
    render(<User id="123" />);
  });

  expect(screen.getByText("Joni Baez"));

  // TODO: msw
  delete global.fetch;
});
