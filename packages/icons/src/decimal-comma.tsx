import { mdiDecimalComma } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DecimalComma(props: IconComponentProps) {
  return <Icon path={mdiDecimalComma} {...props} />;
}

export { mdiDecimalComma as path };
