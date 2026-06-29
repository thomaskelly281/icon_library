import { mdiGamepadLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadLeft(props: IconComponentProps) {
  return <Icon path={mdiGamepadLeft} {...props} />;
}

export { mdiGamepadLeft as path };
