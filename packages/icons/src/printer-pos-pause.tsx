import { mdiPrinterPosPause } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosPause(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosPause} {...props} />;
}

export { mdiPrinterPosPause as path };
