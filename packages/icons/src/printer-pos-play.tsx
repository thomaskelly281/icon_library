import { mdiPrinterPosPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PrinterPosPlay(props: IconComponentProps) {
  return <Icon path={mdiPrinterPosPlay} {...props} />;
}

export { mdiPrinterPosPlay as path };
