import { mdiEyePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyePlus(props: IconComponentProps) {
  return <Icon path={mdiEyePlus} {...props} />;
}

export { mdiEyePlus as path };
