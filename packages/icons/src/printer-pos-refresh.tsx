import { mdiPrinterPosRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosRefresh(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosRefresh} {...props} />;
}

export { mdiPrinterPosRefresh as path };
