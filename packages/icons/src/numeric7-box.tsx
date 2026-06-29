import { mdiNumeric7Box } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric7Box(props: IconComponentProps) {
  return <Icon path={mdiNumeric7Box} {...props} />;
}

export { mdiNumeric7Box as path };
