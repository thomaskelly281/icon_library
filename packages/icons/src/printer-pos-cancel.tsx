import { mdiPrinterPosCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosCancel(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosCancel} {...props} />;
}

export { mdiPrinterPosCancel as path };
