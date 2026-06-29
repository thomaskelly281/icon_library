import { mdiPier } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pier(props: IconComponentProps) {
  return <Icon path={mdiPier} {...props} />;
}

export { mdiPier as path };
