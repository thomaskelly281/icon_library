import { mdiArrowCollapseDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowCollapseDown(props: IconComponentProps) {
  return <Icon path={mdiArrowCollapseDown} {...props} />;
}

export { mdiArrowCollapseDown as path };
