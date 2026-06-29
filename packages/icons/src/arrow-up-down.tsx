import { mdiArrowUpDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpDown(props: IconComponentProps) {
  return <Icon path={mdiArrowUpDown} {...props} />;
}

export { mdiArrowUpDown as path };
