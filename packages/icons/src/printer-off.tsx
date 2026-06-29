import { mdiPrinterOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterOff(props: IconComponentProps) {
  return <Icon path={mdiPrinterOff} {...props} />;
}

export { mdiPrinterOff as path };
