import { mdiGamepadSquare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadSquare(props: IconComponentProps) {
  return <Icon path={mdiGamepadSquare} {...props} />;
}

export { mdiGamepadSquare as path };
