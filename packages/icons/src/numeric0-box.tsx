import { mdiNumeric0Box } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric0Box(props: IconComponentProps) {
  return <Icon path={mdiNumeric0Box} {...props} />;
}

export { mdiNumeric0Box as path };
