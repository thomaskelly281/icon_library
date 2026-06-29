import { mdiMicrophoneMessageOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrophoneMessageOff(props: IconComponentProps) {
  return <Icon path={mdiMicrophoneMessageOff} {...props} />;
}

export { mdiMicrophoneMessageOff as path };
