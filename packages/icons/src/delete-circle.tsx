import { mdiDeleteCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteCircle(props: IconComponentProps) {
  return <Icon path={mdiDeleteCircle} {...props} />;
}

export { mdiDeleteCircle as path };
