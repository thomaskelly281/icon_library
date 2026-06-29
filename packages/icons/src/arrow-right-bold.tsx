import { mdiArrowRightBold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRightBold(props: IconComponentProps) {
  return <Icon path={mdiArrowRightBold} {...props} />;
}

export { mdiArrowRightBold as path };
