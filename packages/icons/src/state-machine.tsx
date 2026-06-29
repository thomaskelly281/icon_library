import { mdiStateMachine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StateMachine(props: IconComponentProps) {
  return <Icon path={mdiStateMachine} {...props} />;
}

export { mdiStateMachine as path };
