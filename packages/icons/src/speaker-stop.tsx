import { mdiSpeakerStop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpeakerStop(props: IconComponentProps) {
  return <Icon path={mdiSpeakerStop} {...props} />;
}

export { mdiSpeakerStop as path };
