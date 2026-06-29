import { mdiApplicationEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationEdit(props: IconComponentProps) {
  return <Icon path={mdiApplicationEdit} {...props} />;
}

export { mdiApplicationEdit as path };
