import { mdiTelevisionPause } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TelevisionPause(props: IconComponentProps) {
  return <Icon path={mdiTelevisionPause} {...props} />;
}

export { mdiTelevisionPause as path };
