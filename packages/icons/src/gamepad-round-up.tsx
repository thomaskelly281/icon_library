import { mdiGamepadRoundUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadRoundUp(props: IconComponentProps) {
  return <Icon path={mdiGamepadRoundUp} {...props} />;
}

export { mdiGamepadRoundUp as path };
