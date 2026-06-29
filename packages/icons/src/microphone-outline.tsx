import { mdiMicrophoneOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrophoneOutline(props: IconComponentProps) {
  return <Icon path={mdiMicrophoneOutline} {...props} />;
}

export { mdiMicrophoneOutline as path };
