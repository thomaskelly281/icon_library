import { mdiAudioVideoOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AudioVideoOff(props: IconComponentProps) {
  return <Icon path={mdiAudioVideoOff} {...props} />;
}

export { mdiAudioVideoOff as path };
