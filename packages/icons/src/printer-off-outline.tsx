import { mdiPrinterOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterOffOutline(props: IconComponentProps) {
  return <Icon path={mdiPrinterOffOutline} {...props} />;
}

export { mdiPrinterOffOutline as path };
