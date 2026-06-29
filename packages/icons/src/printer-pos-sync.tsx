import { mdiPrinterPosSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosSync(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosSync} {...props} />;
}

export { mdiPrinterPosSync as path };
