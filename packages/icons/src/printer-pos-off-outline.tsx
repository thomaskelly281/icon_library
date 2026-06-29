import { mdiPrinterPosOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosOffOutline(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosOffOutline} {...props} />;
}

export { mdiPrinterPosOffOutline as path };
