import { mdiArrowRightDropCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRightDropCircle(props: IconComponentProps) {
  return <Icon path={mdiArrowRightDropCircle} {...props} />;
}

export { mdiArrowRightDropCircle as path };
