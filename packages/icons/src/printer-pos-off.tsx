import { mdiPrinterPosOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosOff(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosOff} {...props} />;
}

export { mdiPrinterPosOff as path };
