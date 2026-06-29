import { mdiMonitorSpeaker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorSpeaker(props: IconComponentProps) {
  return <Icon path={mdiMonitorSpeaker} {...props} />;
}

export { mdiMonitorSpeaker as path };
