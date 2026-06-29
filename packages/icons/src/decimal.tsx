import { mdiDecimal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Decimal(props: IconComponentProps) {
  return <Icon path={mdiDecimal} {...props} />;
}

export { mdiDecimal as path };
