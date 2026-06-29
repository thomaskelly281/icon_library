import { mdiArrowUpThick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpThick(props: IconComponentProps) {
  return <Icon path={mdiArrowUpThick} {...props} />;
}

export { mdiArrowUpThick as path };
