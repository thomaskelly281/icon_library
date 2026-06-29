import { mdiSpeakerWireless } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpeakerWireless(props: IconComponentProps) {
  return <Icon path={mdiSpeakerWireless} {...props} />;
}

export { mdiSpeakerWireless as path };
