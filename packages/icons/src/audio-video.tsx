import { mdiAudioVideo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AudioVideo(props: IconComponentProps) {
  return <Icon path={mdiAudioVideo} {...props} />;
}

export { mdiAudioVideo as path };
