import { mdiGamepadVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GamepadVariant(props: IconComponentProps) {
  return <Icon path={mdiGamepadVariant} {...props} />;
}

export { mdiGamepadVariant as path };
