import { mdiPrinterPosStop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosStop(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosStop} {...props} />;
}

export { mdiPrinterPosStop as path };
