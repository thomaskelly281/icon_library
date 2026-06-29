import { mdiTable } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Table(props: IconComponentProps) {
  return <Icon path={mdiTable} {...props} />;
}

export { mdiTable as path };
