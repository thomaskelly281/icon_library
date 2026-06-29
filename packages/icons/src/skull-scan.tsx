import { mdiSkullScan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkullScan(props: IconComponentProps) {
  return <Icon path={mdiSkullScan} {...props} />;
}

export { mdiSkullScan as path };
