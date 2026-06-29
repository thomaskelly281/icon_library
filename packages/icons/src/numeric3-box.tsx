import { mdiNumeric3Box } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric3Box(props: IconComponentProps) {
  return <Icon path={mdiNumeric3Box} {...props} />;
}

export { mdiNumeric3Box as path };
