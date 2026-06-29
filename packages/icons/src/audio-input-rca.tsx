import { mdiAudioInputRca } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AudioInputRca(props: IconComponentProps) {
  return <Icon path={mdiAudioInputRca} {...props} />;
}

export { mdiAudioInputRca as path };
