import { mdiArrowBottomRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowBottomRight(props: IconComponentProps) {
  return <Icon path={mdiArrowBottomRight} {...props} />;
}

export { mdiArrowBottomRight as path };
