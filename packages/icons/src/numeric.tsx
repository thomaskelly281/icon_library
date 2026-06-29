import { mdiNumeric } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric(props: IconComponentProps) {
  return <Icon path={mdiNumeric} {...props} />;
}

export { mdiNumeric as path };
