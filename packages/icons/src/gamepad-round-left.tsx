import { mdiGamepadRoundLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadRoundLeft(props: IconComponentProps) {
  return <Icon path={mdiGamepadRoundLeft} {...props} />;
}

export { mdiGamepadRoundLeft as path };
