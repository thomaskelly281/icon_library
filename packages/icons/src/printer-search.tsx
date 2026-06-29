import { mdiPrinterSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterSearch(props: IconComponentProps) {
  return <Icon path={mdiPrinterSearch} {...props} />;
}

export { mdiPrinterSearch as path };
