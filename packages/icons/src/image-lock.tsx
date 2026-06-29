import { mdiImageLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageLock(props: IconComponentProps) {
  return <Icon path={mdiImageLock} {...props} />;
}

export { mdiImageLock as path };
