import { mdiPrinter3d } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Printer3d(props: IconComponentProps) {
  return <Icon path={mdiPrinter3d} {...props} />;
}

export { mdiPrinter3d as path };
