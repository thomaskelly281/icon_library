import { mdiNumeric4Circle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric4Circle(props: IconComponentProps) {
  return <Icon path={mdiNumeric4Circle} {...props} />;
}

export { mdiNumeric4Circle as path };
