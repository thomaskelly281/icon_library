import { mdiArrowCollapse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowCollapse(props: IconComponentProps) {
  return <Icon path={mdiArrowCollapse} {...props} />;
}

export { mdiArrowCollapse as path };
