import { mdiAudioInputXlr } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AudioInputXlr(props: IconComponentProps) {
  return <Icon path={mdiAudioInputXlr} {...props} />;
}

export { mdiAudioInputXlr as path };
