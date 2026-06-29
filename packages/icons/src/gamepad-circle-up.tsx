import { mdiGamepadCircleUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadCircleUp(props: IconComponentProps) {
  return <Icon path={mdiGamepadCircleUp} {...props} />;
}

export { mdiGamepadCircleUp as path };
