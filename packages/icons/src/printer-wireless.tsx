import { mdiPrinterWireless } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterWireless(props: IconComponentProps) {
  return <Icon path={mdiPrinterWireless} {...props} />;
}

export { mdiPrinterWireless as path };
