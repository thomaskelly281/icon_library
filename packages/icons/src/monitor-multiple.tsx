import { mdiMonitorMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorMultiple(props: IconComponentProps) {
  return <Icon path={mdiMonitorMultiple} {...props} />;
}

export { mdiMonitorMultiple as path };
