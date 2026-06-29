import { mdiPrinterPosRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosRemove(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosRemove} {...props} />;
}

export { mdiPrinterPosRemove as path };
