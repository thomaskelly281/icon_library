import { mdiArrowCollapseHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowCollapseHorizontal(props: IconComponentProps) {
  return <Icon path={mdiArrowCollapseHorizontal} {...props} />;
}

export { mdiArrowCollapseHorizontal as path };
