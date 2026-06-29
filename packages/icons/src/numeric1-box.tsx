import { mdiNumeric1Box } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric1Box(props: IconComponentProps) {
  return <Icon path={mdiNumeric1Box} {...props} />;
}

export { mdiNumeric1Box as path };
