import { mdiTelevisionSpeaker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TelevisionSpeaker(props: IconComponentProps) {
  return <Icon path={mdiTelevisionSpeaker} {...props} />;
}

export { mdiTelevisionSpeaker as path };
