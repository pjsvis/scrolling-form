import * as React from "react";
import { render } from "react-dom";
import { Provider } from "unstated";
import { ErrorBoundary } from "./error-boundary";
import "tachyons";
import "animate.css";
import "./app.css";
import { App } from "./app";
import { Footer } from "./footer";

interface Props {}

/**
 * react sticky footer @see<https://medium.com/@stefanmaretic/react-sticky-footer-f842d5fbd68>
 * react sticky footer with provider @see<https://codesandbox.io/s/8xz3l2771l?from-embed>
 */
const Wrapper = (props: Props) => (
  <ErrorBoundary>
    <Provider>
      <App />
    </Provider>
  </ErrorBoundary>
);
// $TsFixMe is an alias for type any to make it easier to search for
const withFooter = (WrappedComponent: $TsFixMe) => () => (
  <>
    <WrappedComponent key="1" />,
    <Footer key="2" />
  </>
);

const WrapperWithFooter = withFooter(Wrapper);

render(<WrapperWithFooter />, document.getElementById("root") as HTMLElement);
