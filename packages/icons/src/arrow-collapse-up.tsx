import { mdiArrowCollapseUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowCollapseUp(props: IconComponentProps) {
  return <Icon path={mdiArrowCollapseUp} {...props} />;
}

export { mdiArrowCollapseUp as path };
