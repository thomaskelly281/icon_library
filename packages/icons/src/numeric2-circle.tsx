import { mdiNumeric2Circle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric2Circle(props: IconComponentProps) {
  return <Icon path={mdiNumeric2Circle} {...props} />;
}

export { mdiNumeric2Circle as path };
