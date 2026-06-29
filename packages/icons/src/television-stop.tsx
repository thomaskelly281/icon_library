import { mdiTelevisionStop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TelevisionStop(props: IconComponentProps) {
  return <Icon path={mdiTelevisionStop} {...props} />;
}

export { mdiTelevisionStop as path };
