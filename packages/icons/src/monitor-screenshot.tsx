import { mdiMonitorScreenshot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorScreenshot(props: IconComponentProps) {
  return <Icon path={mdiMonitorScreenshot} {...props} />;
}

export { mdiMonitorScreenshot as path };
