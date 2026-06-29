import { mdiBarcodeScan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BarcodeScan(props: IconComponentProps) {
  return <Icon path={mdiBarcodeScan} {...props} />;
}

export { mdiBarcodeScan as path };
