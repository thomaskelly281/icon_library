import { mdiNumeric9Plus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric9Plus(props: IconComponentProps) {
  return <Icon path={mdiNumeric9Plus} {...props} />;
}

export { mdiNumeric9Plus as path };
