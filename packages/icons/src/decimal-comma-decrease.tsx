import { mdiDecimalCommaDecrease } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DecimalCommaDecrease(props: IconComponentProps) {
  return <Icon path={mdiDecimalCommaDecrease} {...props} />;
}

export { mdiDecimalCommaDecrease as path };
