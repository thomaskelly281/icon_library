import { mdiArrowCollapseRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowCollapseRight(props: IconComponentProps) {
  return <Icon path={mdiArrowCollapseRight} {...props} />;
}

export { mdiArrowCollapseRight as path };
