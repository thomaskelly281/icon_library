import { mdiDecimalIncrease } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DecimalIncrease(props: IconComponentProps) {
  return <Icon path={mdiDecimalIncrease} {...props} />;
}

export { mdiDecimalIncrease as path };
