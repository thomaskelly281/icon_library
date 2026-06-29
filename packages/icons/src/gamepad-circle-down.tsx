import { mdiGamepadCircleDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadCircleDown(props: IconComponentProps) {
  return <Icon path={mdiGamepadCircleDown} {...props} />;
}

export { mdiGamepadCircleDown as path };
