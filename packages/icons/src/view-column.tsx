import { mdiViewColumn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewColumn(props: IconComponentProps) {
  return <Icon path={mdiViewColumn} {...props} />;
}

export { mdiViewColumn as path };
