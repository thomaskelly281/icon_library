import { mdiGhostOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GhostOff(props: IconComponentProps) {
  return <Icon path={mdiGhostOff} {...props} />;
}

export { mdiGhostOff as path };
