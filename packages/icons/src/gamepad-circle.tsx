import { mdiGamepadCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadCircle(props: IconComponentProps) {
  return <Icon path={mdiGamepadCircle} {...props} />;
}

export { mdiGamepadCircle as path };
