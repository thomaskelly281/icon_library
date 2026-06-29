import { mdiArrowLeftDropCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftDropCircle(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftDropCircle} {...props} />;
}

export { mdiArrowLeftDropCircle as path };
