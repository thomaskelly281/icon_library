import { mdiPrinterPosOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosOutline(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosOutline} {...props} />;
}

export { mdiPrinterPosOutline as path };
