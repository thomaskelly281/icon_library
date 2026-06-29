import { mdiSafe } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Safe(props: IconComponentProps) {
  return <Icon path={mdiSafe} {...props} />;
}

export { mdiSafe as path };
