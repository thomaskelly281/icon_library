import { mdiLinkEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkEdit(props: IconComponentProps) {
  return <Icon path={mdiLinkEdit} {...props} />;
}

export { mdiLinkEdit as path };
