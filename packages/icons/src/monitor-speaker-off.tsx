import { mdiMonitorSpeakerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorSpeakerOff(props: IconComponentProps) {
  return <Icon path={mdiMonitorSpeakerOff} {...props} />;
}

export { mdiMonitorSpeakerOff as path };
