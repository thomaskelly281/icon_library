import { mdiPrinterOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterOutline(props: IconComponentProps) {
  return <Icon path={mdiPrinterOutline} {...props} />;
}

export { mdiPrinterOutline as path };
