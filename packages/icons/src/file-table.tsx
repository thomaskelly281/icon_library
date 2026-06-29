import { mdiFileTable } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileTable(props: IconComponentProps) {
  return <Icon path={mdiFileTable} {...props} />;
}

export { mdiFileTable as path };
