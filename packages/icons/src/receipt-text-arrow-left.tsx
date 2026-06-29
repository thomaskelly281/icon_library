import { mdiReceiptTextArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextArrowLeft} {...props} />;
}

export { mdiReceiptTextArrowLeft as path };
