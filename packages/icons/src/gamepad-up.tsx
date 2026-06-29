import { mdiGamepadUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadUp(props: IconComponentProps) {
  return <Icon path={mdiGamepadUp} {...props} />;
}

export { mdiGamepadUp as path };
