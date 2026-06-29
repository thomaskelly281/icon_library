import { mdiPrinterPosEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosEdit(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosEdit} {...props} />;
}

export { mdiPrinterPosEdit as path };
