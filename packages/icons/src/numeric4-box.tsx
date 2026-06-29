import { mdiNumeric4Box } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric4Box(props: IconComponentProps) {
  return <Icon path={mdiNumeric4Box} {...props} />;
}

export { mdiNumeric4Box as path };
