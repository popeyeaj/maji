import React from "react";
import { cleanup, wait } from "@testing-library/react";
import { render as rtlRender } from "./utils/test-utils";
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
});
