import { mdiMicrophoneMessage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrophoneMessage(props: IconComponentProps) {
  return <Icon path={mdiMicrophoneMessage} {...props} />;
}

export { mdiMicrophoneMessage as path };
