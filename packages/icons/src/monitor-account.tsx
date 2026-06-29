import { mdiMonitorAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorAccount(props: IconComponentProps) {
  return <Icon path={mdiMonitorAccount} {...props} />;
}

export { mdiMonitorAccount as path };
