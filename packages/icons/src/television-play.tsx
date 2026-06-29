import { mdiTelevisionPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TelevisionPlay(props: IconComponentProps) {
  return <Icon path={mdiTelevisionPlay} {...props} />;
}

export { mdiTelevisionPlay as path };
