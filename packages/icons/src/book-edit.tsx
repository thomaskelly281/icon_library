import { mdiBookEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookEdit(props: IconComponentProps) {
  return <Icon path={mdiBookEdit} {...props} />;
}

export { mdiBookEdit as path };
