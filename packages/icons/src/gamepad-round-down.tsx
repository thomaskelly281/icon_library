import { mdiGamepadRoundDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadRoundDown(props: IconComponentProps) {
  return <Icon path={mdiGamepadRoundDown} {...props} />;
}

export { mdiGamepadRoundDown as path };
