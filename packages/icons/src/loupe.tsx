import { mdiLoupe } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Loupe(props: IconComponentProps) {
  return <Icon path={mdiLoupe} {...props} />;
}

export { mdiLoupe as path };
