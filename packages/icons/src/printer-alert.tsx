import { mdiPrinterAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterAlert(props: IconComponentProps) {
  return <Icon path={mdiPrinterAlert} {...props} />;
}

export { mdiPrinterAlert as path };
