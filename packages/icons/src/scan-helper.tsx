import { mdiScanHelper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScanHelper(props: IconComponentProps) {
  return <Icon path={mdiScanHelper} {...props} />;
}

export { mdiScanHelper as path };
