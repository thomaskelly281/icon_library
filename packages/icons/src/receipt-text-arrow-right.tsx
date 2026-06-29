import { mdiReceiptTextArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextArrowRight(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextArrowRight} {...props} />;
}

export { mdiReceiptTextArrowRight as path };
