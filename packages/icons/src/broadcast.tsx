import { mdiBroadcast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Broadcast(props: IconComponentProps) {
  return <Icon path={mdiBroadcast} {...props} />;
}

export { mdiBroadcast as path };
