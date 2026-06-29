import { mdiArrowUpDropCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpDropCircle(props: IconComponentProps) {
  return <Icon path={mdiArrowUpDropCircle} {...props} />;
}

export { mdiArrowUpDropCircle as path };
