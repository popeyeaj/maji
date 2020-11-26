import React from "react";
import { render as rtlRender } from "./utils/test-utils";
import { screen, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { createStore } from "redux";
import reducers from "./reducers";
import { rest } from "msw";
import { setupServer } from "msw/node";

afterEach(cleanup);

describe("App", () => {
  test("renders App component", () => {
    rtlRender(<App />);
  });

  test("navigating", async () => {
    const { findByTestId } = rtlRender(<App />);
    const linkEle = await findByTestId("log");
    userEvent.click(linkEle);
    waitFor(() => {
      expect(screen.getByText(/历史调用记录/i)).toBeInTheDocument();
    });
  });
});
