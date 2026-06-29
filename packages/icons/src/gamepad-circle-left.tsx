import { mdiGamepadCircleLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadCircleLeft(props: IconComponentProps) {
  return <Icon path={mdiGamepadCircleLeft} {...props} />;
}

export { mdiGamepadCircleLeft as path };
