import { mdiSelectAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectAll(props: IconComponentProps) {
  return <Icon path={mdiSelectAll} {...props} />;
}

export { mdiSelectAll as path };
