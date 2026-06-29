import { mdiMonitorOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorOff(props: IconComponentProps) {
  return <Icon path={mdiMonitorOff} {...props} />;
}

export { mdiMonitorOff as path };
