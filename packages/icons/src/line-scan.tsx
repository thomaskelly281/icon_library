import { mdiLineScan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LineScan(props: IconComponentProps) {
  return <Icon path={mdiLineScan} {...props} />;
}

export { mdiLineScan as path };
