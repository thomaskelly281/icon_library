import { mdiNumeric9Box } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric9Box(props: IconComponentProps) {
  return <Icon path={mdiNumeric9Box} {...props} />;
}

export { mdiNumeric9Box as path };
