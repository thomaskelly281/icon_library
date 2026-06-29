import { mdiArrowLeftRightBold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftRightBold(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftRightBold} {...props} />;
}

export { mdiArrowLeftRightBold as path };
