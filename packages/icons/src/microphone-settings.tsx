import { mdiMicrophoneSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrophoneSettings(props: IconComponentProps) {
  return <Icon path={mdiMicrophoneSettings} {...props} />;
}

export { mdiMicrophoneSettings as path };
