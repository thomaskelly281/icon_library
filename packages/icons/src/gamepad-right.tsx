import { mdiGamepadRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadRight(props: IconComponentProps) {
  return <Icon path={mdiGamepadRight} {...props} />;
}

export { mdiGamepadRight as path };
