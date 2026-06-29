import { mdiNumeric10Circle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric10Circle(props: IconComponentProps) {
  return <Icon path={mdiNumeric10Circle} {...props} />;
}

export { mdiNumeric10Circle as path };
