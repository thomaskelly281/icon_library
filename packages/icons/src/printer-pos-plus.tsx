import { mdiPrinterPosPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosPlus(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosPlus} {...props} />;
}

export { mdiPrinterPosPlus as path };
