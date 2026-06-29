import { mdiPrinterPosPauseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosPauseOutline(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosPauseOutline} {...props} />;
}

export { mdiPrinterPosPauseOutline as path };
