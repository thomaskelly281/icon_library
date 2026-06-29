import { mdiArrowUpThin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpThin(props: IconComponentProps) {
  return <Icon path={mdiArrowUpThin} {...props} />;
}

export { mdiArrowUpThin as path };
