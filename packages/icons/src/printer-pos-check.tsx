import { mdiPrinterPosCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosCheck(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosCheck} {...props} />;
}

export { mdiPrinterPosCheck as path };
