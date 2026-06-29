import { mdiNumeric8Box } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric8Box(props: IconComponentProps) {
  return <Icon path={mdiNumeric8Box} {...props} />;
}

export { mdiNumeric8Box as path };
