import { mdiNumeric2Box } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric2Box(props: IconComponentProps) {
  return <Icon path={mdiNumeric2Box} {...props} />;
}

export { mdiNumeric2Box as path };
