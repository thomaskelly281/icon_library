import { mdiScannerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScannerOff(props: IconComponentProps) {
  return <Icon path={mdiScannerOff} {...props} />;
}

export { mdiScannerOff as path };
