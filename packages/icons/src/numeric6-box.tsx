import { mdiNumeric6Box } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric6Box(props: IconComponentProps) {
  return <Icon path={mdiNumeric6Box} {...props} />;
}

export { mdiNumeric6Box as path };
