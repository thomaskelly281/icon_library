import { mdiMonitorVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorVertical(props: IconComponentProps) {
  return <Icon path={mdiMonitorVertical} {...props} />;
}

export { mdiMonitorVertical as path };
