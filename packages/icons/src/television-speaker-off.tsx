import { mdiTelevisionSpeakerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TelevisionSpeakerOff(props: IconComponentProps) {
  return <Icon path={mdiTelevisionSpeakerOff} {...props} />;
}

export { mdiTelevisionSpeakerOff as path };
