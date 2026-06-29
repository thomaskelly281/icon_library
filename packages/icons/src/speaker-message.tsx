import { mdiSpeakerMessage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpeakerMessage(props: IconComponentProps) {
  return <Icon path={mdiSpeakerMessage} {...props} />;
}

export { mdiSpeakerMessage as path };
