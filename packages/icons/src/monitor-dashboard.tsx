import { mdiMonitorDashboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorDashboard(props: IconComponentProps) {
  return <Icon path={mdiMonitorDashboard} {...props} />;
}

export { mdiMonitorDashboard as path };
