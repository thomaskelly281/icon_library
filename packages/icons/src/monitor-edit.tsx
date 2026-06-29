import { mdiMonitorEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorEdit(props: IconComponentProps) {
  return <Icon path={mdiMonitorEdit} {...props} />;
}

export { mdiMonitorEdit as path };
