import { mdiGamepadRound } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadRound(props: IconComponentProps) {
  return <Icon path={mdiGamepadRound} {...props} />;
}

export { mdiGamepadRound as path };
