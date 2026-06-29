import { mdiResize } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Resize(props: IconComponentProps) {
  return <Icon path={mdiResize} {...props} />;
}

export { mdiResize as path };
