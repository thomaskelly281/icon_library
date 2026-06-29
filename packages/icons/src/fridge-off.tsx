import { mdiFridgeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FridgeOff(props: IconComponentProps) {
  return <Icon path={mdiFridgeOff} {...props} />;
}

export { mdiFridgeOff as path };
