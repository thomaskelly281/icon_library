import { mdiArrowTopLeftBottomRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowTopLeftBottomRight(props: IconComponentProps) {
  return <Icon path={mdiArrowTopLeftBottomRight} {...props} />;
}

export { mdiArrowTopLeftBottomRight as path };
