import { mdiGamepadCircleRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadCircleRight(props: IconComponentProps) {
  return <Icon path={mdiGamepadCircleRight} {...props} />;
}

export { mdiGamepadCircleRight as path };
