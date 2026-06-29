import { mdiMessageImage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageImage(props: IconComponentProps) {
  return <Icon path={mdiMessageImage} {...props} />;
}

export { mdiMessageImage as path };
