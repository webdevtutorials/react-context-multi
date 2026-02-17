import { Provider1 } from "./Context1";
import { Provider2 } from "./Context2";

export function AppProviders({ children }) {
  return (
    <Provider1>
      <Provider2>{children}</Provider2>
    </Provider1>
  );
}
