import { mdiArrowCollapseVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowCollapseVertical(props: IconComponentProps) {
  return <Icon path={mdiArrowCollapseVertical} {...props} />;
}

export { mdiArrowCollapseVertical as path };
