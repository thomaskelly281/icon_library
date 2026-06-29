import { mdiAudioInputStereoMinijack } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AudioInputStereoMinijack(props: IconComponentProps) {
  return <Icon path={mdiAudioInputStereoMinijack} {...props} />;
}

export { mdiAudioInputStereoMinijack as path };
