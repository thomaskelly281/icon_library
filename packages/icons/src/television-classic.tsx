import { mdiTelevisionClassic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TelevisionClassic(props: IconComponentProps) {
  return <Icon path={mdiTelevisionClassic} {...props} />;
}

export { mdiTelevisionClassic as path };
