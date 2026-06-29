import { mdiArrowCollapseAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowCollapseAll(props: IconComponentProps) {
  return <Icon path={mdiArrowCollapseAll} {...props} />;
}

export { mdiArrowCollapseAll as path };
