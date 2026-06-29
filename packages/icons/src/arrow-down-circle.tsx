import { mdiArrowDownCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDownCircle(props: IconComponentProps) {
  return <Icon path={mdiArrowDownCircle} {...props} />;
}

export { mdiArrowDownCircle as path };
