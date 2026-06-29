import { mdiArrowLeftCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftCircle(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftCircle} {...props} />;
}

export { mdiArrowLeftCircle as path };
