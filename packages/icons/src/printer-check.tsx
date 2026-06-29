import { mdiPrinterCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterCheck(props: IconComponentProps) {
  return <Icon path={mdiPrinterCheck} {...props} />;
}

export { mdiPrinterCheck as path };
