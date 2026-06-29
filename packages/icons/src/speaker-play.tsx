import { mdiSpeakerPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpeakerPlay(props: IconComponentProps) {
  return <Icon path={mdiSpeakerPlay} {...props} />;
}

export { mdiSpeakerPlay as path };
