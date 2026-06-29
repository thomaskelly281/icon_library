import { mdiBroadcastOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BroadcastOff(props: IconComponentProps) {
  return <Icon path={mdiBroadcastOff} {...props} />;
}

export { mdiBroadcastOff as path };
