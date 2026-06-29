import { mdiNumeric5Circle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric5Circle(props: IconComponentProps) {
  return <Icon path={mdiNumeric5Circle} {...props} />;
}

export { mdiNumeric5Circle as path };
