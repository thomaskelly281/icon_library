import { mdiMonitorStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorStar(props: IconComponentProps) {
  return <Icon path={mdiMonitorStar} {...props} />;
}

export { mdiMonitorStar as path };
