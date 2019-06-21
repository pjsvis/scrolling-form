import { Container } from "unstated";

interface State {
  isDev: boolean;
}

class SaContainer extends Container<State> {
  state: State = {
    isDev: true
  };
}

const saContainer = new SaContainer();
export { saContainer as default, SaContainer };
