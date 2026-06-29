import { mdiArrowRightBoldCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRightBoldCircle(props: IconComponentProps) {
  return <Icon path={mdiArrowRightBoldCircle} {...props} />;
}

export { mdiArrowRightBoldCircle as path };
