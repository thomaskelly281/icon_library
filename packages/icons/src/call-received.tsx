import { mdiCallReceived } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CallReceived(props: IconComponentProps) {
  return <Icon path={mdiCallReceived} {...props} />;
}

export { mdiCallReceived as path };
