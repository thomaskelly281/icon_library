import { mdiSpeaker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Speaker(props: IconComponentProps) {
  return <Icon path={mdiSpeaker} {...props} />;
}

export { mdiSpeaker as path };
