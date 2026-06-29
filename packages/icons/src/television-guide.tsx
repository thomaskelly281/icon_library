import { mdiTelevisionGuide } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TelevisionGuide(props: IconComponentProps) {
  return <Icon path={mdiTelevisionGuide} {...props} />;
}

export { mdiTelevisionGuide as path };
