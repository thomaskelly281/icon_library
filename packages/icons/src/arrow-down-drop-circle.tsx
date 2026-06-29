import { mdiArrowDownDropCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDownDropCircle(props: IconComponentProps) {
  return <Icon path={mdiArrowDownDropCircle} {...props} />;
}

export { mdiArrowDownDropCircle as path };
