import { mdiMonitorArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorArrowDown(props: IconComponentProps) {
  return <Icon path={mdiMonitorArrowDown} {...props} />;
}

export { mdiMonitorArrowDown as path };
