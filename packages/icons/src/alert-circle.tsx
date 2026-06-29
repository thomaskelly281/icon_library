import { mdiAlertCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertCircle(props: IconComponentProps) {
  return <Icon path={mdiAlertCircle} {...props} />;
}

export { mdiAlertCircle as path };
