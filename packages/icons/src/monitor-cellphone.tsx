import { mdiMonitorCellphone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorCellphone(props: IconComponentProps) {
  return <Icon path={mdiMonitorCellphone} {...props} />;
}

export { mdiMonitorCellphone as path };
