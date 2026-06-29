import { mdiGamepadRoundRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadRoundRight(props: IconComponentProps) {
  return <Icon path={mdiGamepadRoundRight} {...props} />;
}

export { mdiGamepadRoundRight as path };
