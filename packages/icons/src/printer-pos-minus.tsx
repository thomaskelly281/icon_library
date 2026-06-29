import { mdiPrinterPosMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosMinus(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosMinus} {...props} />;
}

export { mdiPrinterPosMinus as path };
