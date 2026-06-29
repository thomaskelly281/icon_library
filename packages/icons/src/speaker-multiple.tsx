import { mdiSpeakerMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpeakerMultiple(props: IconComponentProps) {
  return <Icon path={mdiSpeakerMultiple} {...props} />;
}

export { mdiSpeakerMultiple as path };
