import { mdiPrinterPosStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosStar(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosStar} {...props} />;
}

export { mdiPrinterPosStar as path };
