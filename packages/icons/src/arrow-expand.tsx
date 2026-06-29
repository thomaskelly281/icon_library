import { mdiArrowExpand } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowExpand(props: IconComponentProps) {
  return <Icon path={mdiArrowExpand} {...props} />;
}

export { mdiArrowExpand as path };
