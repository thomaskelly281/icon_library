import { mdiPrinterPosPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosPlusOutline} {...props} />;
}

export { mdiPrinterPosPlusOutline as path };
