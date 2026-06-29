import { mdiDecimalCommaIncrease } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DecimalCommaIncrease(props: IconComponentProps) {
  return <Icon path={mdiDecimalCommaIncrease} {...props} />;
}

export { mdiDecimalCommaIncrease as path };
