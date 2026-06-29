import { mdiPrinterEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterEye(props: IconComponentProps) {
  return <Icon path={mdiPrinterEye} {...props} />;
}

export { mdiPrinterEye as path };
