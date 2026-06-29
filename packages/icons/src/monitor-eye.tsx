import { mdiMonitorEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorEye(props: IconComponentProps) {
  return <Icon path={mdiMonitorEye} {...props} />;
}

export { mdiMonitorEye as path };
