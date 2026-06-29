import { mdiMonitorSmall } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorSmall(props: IconComponentProps) {
  return <Icon path={mdiMonitorSmall} {...props} />;
}

export { mdiMonitorSmall as path };
