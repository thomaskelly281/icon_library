import { mdiArrowRightCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRightCircle(props: IconComponentProps) {
  return <Icon path={mdiArrowRightCircle} {...props} />;
}

export { mdiArrowRightCircle as path };
