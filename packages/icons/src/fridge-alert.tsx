import { mdiFridgeAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FridgeAlert(props: IconComponentProps) {
  return <Icon path={mdiFridgeAlert} {...props} />;
}

export { mdiFridgeAlert as path };
