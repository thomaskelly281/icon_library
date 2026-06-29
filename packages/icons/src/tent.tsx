import { mdiTent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tent(props: IconComponentProps) {
  return <Icon path={mdiTent} {...props} />;
}

export { mdiTent as path };
