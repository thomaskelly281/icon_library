import { mdiSpeakerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpeakerOff(props: IconComponentProps) {
  return <Icon path={mdiSpeakerOff} {...props} />;
}

export { mdiSpeakerOff as path };
