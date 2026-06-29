import { mdiTransition } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Transition(props: IconComponentProps) {
  return <Icon path={mdiTransition} {...props} />;
}

export { mdiTransition as path };
