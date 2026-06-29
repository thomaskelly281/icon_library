import { mdiBarcode } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Barcode(props: IconComponentProps) {
  return <Icon path={mdiBarcode} {...props} />;
}

export { mdiBarcode as path };
