import { mdiSoundbar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Soundbar(props: IconComponentProps) {
  return <Icon path={mdiSoundbar} {...props} />;
}

export { mdiSoundbar as path };
