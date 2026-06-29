import { mdiTableEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableEdit(props: IconComponentProps) {
  return <Icon path={mdiTableEdit} {...props} />;
}

export { mdiTableEdit as path };
