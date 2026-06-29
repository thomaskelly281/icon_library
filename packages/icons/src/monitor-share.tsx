import { mdiMonitorShare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorShare(props: IconComponentProps) {
  return <Icon path={mdiMonitorShare} {...props} />;
}

export { mdiMonitorShare as path };
