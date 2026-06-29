import { mdiContentSaveEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveEdit(props: IconComponentProps) {
  return <Icon path={mdiContentSaveEdit} {...props} />;
}

export { mdiContentSaveEdit as path };
