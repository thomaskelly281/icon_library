import { mdiNumeric10Box } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric10Box(props: IconComponentProps) {
  return <Icon path={mdiNumeric10Box} {...props} />;
}

export { mdiNumeric10Box as path };
