import { mdiNumeric3Circle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric3Circle(props: IconComponentProps) {
  return <Icon path={mdiNumeric3Circle} {...props} />;
}

export { mdiNumeric3Circle as path };
