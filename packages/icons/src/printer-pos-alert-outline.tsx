import { mdiPrinterPosAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosAlertOutline} {...props} />;
}

export { mdiPrinterPosAlertOutline as path };
