import * as React from "react";

interface Props {}

export type ButtonType = "primary" | "info" | "warning" | "success" | "default";

const Arrow = () => {
  return <i className="fa fa-fw fa-arrow-right white pa3 mr2" />;
};
const Check = () => {
  return <i className="fa fa-fw fa-check white ml1" />;
};

export const NavButtons = (props: Props) => {
  return (
    <nav className="w-100 fl f6 bg-rbs-blue fw6 ttu tracked tc">
      <div>
        <button type="button" className="btn btn-xs btn-primary mb2">
          About You
          <Check />
        </button>
        <Arrow />
        <button type="button" className="btn btn-xs btn-primary mb2">
          Find Out
          <Check />
        </button>
        <Arrow />
        <button type="button" className="btn btn-xs btn-primary mb2">
          What Happened
          <Check />
        </button>
        <Arrow />
        <button type="button" className="btn btn-xs btn-primary mb2">
          Categorise
          <Check />
        </button>
      </div>
    </nav>
  );
};
