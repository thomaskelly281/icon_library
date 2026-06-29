import { mdiNumeric5Box } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric5Box(props: IconComponentProps) {
  return <Icon path={mdiNumeric5Box} {...props} />;
}

export { mdiNumeric5Box as path };
