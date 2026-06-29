import { mdiAlertOctagon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertOctagon(props: IconComponentProps) {
  return <Icon path={mdiAlertOctagon} {...props} />;
}

export { mdiAlertOctagon as path };
