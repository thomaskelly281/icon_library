import { mdiGamepadDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadDown(props: IconComponentProps) {
  return <Icon path={mdiGamepadDown} {...props} />;
}

export { mdiGamepadDown as path };
