import { mdiAlertRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertRemove(props: IconComponentProps) {
  return <Icon path={mdiAlertRemove} {...props} />;
}

export { mdiAlertRemove as path };
