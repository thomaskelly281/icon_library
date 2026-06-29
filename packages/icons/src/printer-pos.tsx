import { mdiPrinterPos } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPos(props: IconComponentProps) {
  return <Icon path={mdiPrinterPos} {...props} />;
}

export { mdiPrinterPos as path };
