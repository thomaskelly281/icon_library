import { mdiMonitorLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorLock(props: IconComponentProps) {
  return <Icon path={mdiMonitorLock} {...props} />;
}

export { mdiMonitorLock as path };
