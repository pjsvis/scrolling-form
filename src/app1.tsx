import * as React from "react";
import { Subscribe } from "unstated";
import Sticky from "react-stickynode";
import saContainer, { SaContainer } from "./sa-container";
import { Header } from "./header";
import { Main } from "./main";
import { StickyMenu } from "./sticky-menu";

interface Props {}

export const App = (props: Props) => {
  return (
    <Subscribe to={[saContainer]}>
      {(sa: SaContainer) => (
        <>
          <div className="content">
            <Header />
            <Sticky enabled={true} top={0} bottomBoundary={10000} innerZ={2}>
              <StickyMenu />
            </Sticky>
            <Main />
          </div>
        </>
      )}
    </Subscribe>
  );
};
