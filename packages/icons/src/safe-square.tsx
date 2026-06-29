import { mdiSafeSquare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SafeSquare(props: IconComponentProps) {
  return <Icon path={mdiSafeSquare} {...props} />;
}

export { mdiSafeSquare as path };
