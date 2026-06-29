import { mdiPrinterPosWrench } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosWrench(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosWrench} {...props} />;
}

export { mdiPrinterPosWrench as path };
