import { mdiMicrophoneVariantOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrophoneVariantOff(props: IconComponentProps) {
  return <Icon path={mdiMicrophoneVariantOff} {...props} />;
}

export { mdiMicrophoneVariantOff as path };
