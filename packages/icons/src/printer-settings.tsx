import { mdiPrinterSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterSettings(props: IconComponentProps) {
  return <Icon path={mdiPrinterSettings} {...props} />;
}

export { mdiPrinterSettings as path };
