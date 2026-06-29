import { mdiFileArrowUpDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileArrowUpDown(props: IconComponentProps) {
  return <Icon path={mdiFileArrowUpDown} {...props} />;
}

export { mdiFileArrowUpDown as path };
