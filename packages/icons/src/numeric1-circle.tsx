import { mdiNumeric1Circle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric1Circle(props: IconComponentProps) {
  return <Icon path={mdiNumeric1Circle} {...props} />;
}

export { mdiNumeric1Circle as path };
