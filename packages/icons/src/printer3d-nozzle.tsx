import { mdiPrinter3dNozzle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Printer3dNozzle(props: IconComponentProps) {
  return <Icon path={mdiPrinter3dNozzle} {...props} />;
}

export { mdiPrinter3dNozzle as path };
