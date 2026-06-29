import { mdiAccountEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountEdit(props: IconComponentProps) {
  return <Icon path={mdiAccountEdit} {...props} />;
}

export { mdiAccountEdit as path };
