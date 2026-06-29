import { mdiMicrophoneVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrophoneVariant(props: IconComponentProps) {
  return <Icon path={mdiMicrophoneVariant} {...props} />;
}

export { mdiMicrophoneVariant as path };
