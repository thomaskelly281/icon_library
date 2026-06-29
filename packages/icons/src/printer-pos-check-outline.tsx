import { mdiPrinterPosCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosCheckOutline} {...props} />;
}

export { mdiPrinterPosCheckOutline as path };
