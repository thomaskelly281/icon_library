import { mdiMouseOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseOff(props: IconComponentProps) {
  return <Icon path={mdiMouseOff} {...props} />;
}

export { mdiMouseOff as path };
