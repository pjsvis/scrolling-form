const unreachable = (x: never): never => {
  throw new Error(`This should be unreachable! but got ${x}`);
};

export type HelpPosition = "top" | "left" | "right" | "bottom";

export const getHelpPositionStyle = (pos: HelpPosition) => {
  switch (pos) {
    case "top":
      return { top: "-280px", left: "0" };
    case "left":
      return { left: "-280px" };
    case "right":
      return { top: "0", left: "0" };
    case "bottom":
      return { top: "0", left: "0" };
    default:
      return unreachable(pos);
  }
};
