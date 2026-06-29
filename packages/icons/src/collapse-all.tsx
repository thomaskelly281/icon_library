import { mdiCollapseAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CollapseAll(props: IconComponentProps) {
  return <Icon path={mdiCollapseAll} {...props} />;
}

export { mdiCollapseAll as path };
