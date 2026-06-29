import { mdiFileEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileEdit(props: IconComponentProps) {
  return <Icon path={mdiFileEdit} {...props} />;
}

export { mdiFileEdit as path };
