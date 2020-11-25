import React, { ReactElement, ReactNode } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import store from "../store";

const history = createBrowserHistory();
const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper: React.FC = ({ children }) => {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
