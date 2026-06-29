import { mdiSoundcloud } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Soundcloud(props: IconComponentProps) {
  return <Icon path={mdiSoundcloud} {...props} />;
}

export { mdiSoundcloud as path };
