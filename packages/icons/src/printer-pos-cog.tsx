import { mdiPrinterPosCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosCog(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosCog} {...props} />;
}

export { mdiPrinterPosCog as path };
