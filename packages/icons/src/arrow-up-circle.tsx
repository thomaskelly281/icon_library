import { mdiArrowUpCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpCircle(props: IconComponentProps) {
  return <Icon path={mdiArrowUpCircle} {...props} />;
}

export { mdiArrowUpCircle as path };
