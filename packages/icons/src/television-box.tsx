import { mdiTelevisionBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TelevisionBox(props: IconComponentProps) {
  return <Icon path={mdiTelevisionBox} {...props} />;
}

export { mdiTelevisionBox as path };
