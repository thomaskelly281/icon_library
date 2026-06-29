import { mdiPrinterPosAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosAlert(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosAlert} {...props} />;
}

export { mdiPrinterPosAlert as path };
