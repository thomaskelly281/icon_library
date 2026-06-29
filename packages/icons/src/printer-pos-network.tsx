import { mdiPrinterPosNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosNetwork(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosNetwork} {...props} />;
}

export { mdiPrinterPosNetwork as path };
