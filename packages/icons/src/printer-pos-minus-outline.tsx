import { mdiPrinterPosMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosMinusOutline} {...props} />;
}

export { mdiPrinterPosMinusOutline as path };
