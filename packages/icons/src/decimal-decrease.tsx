import { mdiDecimalDecrease } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DecimalDecrease(props: IconComponentProps) {
  return <Icon path={mdiDecimalDecrease} {...props} />;
}

export { mdiDecimalDecrease as path };
