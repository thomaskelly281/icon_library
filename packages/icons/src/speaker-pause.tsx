import { mdiSpeakerPause } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpeakerPause(props: IconComponentProps) {
  return <Icon path={mdiSpeakerPause} {...props} />;
}

export { mdiSpeakerPause as path };
