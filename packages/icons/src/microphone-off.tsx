import { mdiMicrophoneOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrophoneOff(props: IconComponentProps) {
  return <Icon path={mdiMicrophoneOff} {...props} />;
}

export { mdiMicrophoneOff as path };
