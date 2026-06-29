import { mdiArrowCollapseLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowCollapseLeft(props: IconComponentProps) {
  return <Icon path={mdiArrowCollapseLeft} {...props} />;
}

export { mdiArrowCollapseLeft as path };
