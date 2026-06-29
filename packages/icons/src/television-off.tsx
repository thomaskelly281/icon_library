import { mdiTelevisionOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TelevisionOff(props: IconComponentProps) {
  return <Icon path={mdiTelevisionOff} {...props} />;
}

export { mdiTelevisionOff as path };
