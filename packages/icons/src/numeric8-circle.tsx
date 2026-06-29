import { mdiNumeric8Circle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric8Circle(props: IconComponentProps) {
  return <Icon path={mdiNumeric8Circle} {...props} />;
}

export { mdiNumeric8Circle as path };
