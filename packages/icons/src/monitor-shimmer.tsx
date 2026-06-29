import { mdiMonitorShimmer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorShimmer(props: IconComponentProps) {
  return <Icon path={mdiMonitorShimmer} {...props} />;
}

export { mdiMonitorShimmer as path };
