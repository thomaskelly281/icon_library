import { mdiEmailEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailEdit(props: IconComponentProps) {
  return <Icon path={mdiEmailEdit} {...props} />;
}

export { mdiEmailEdit as path };
