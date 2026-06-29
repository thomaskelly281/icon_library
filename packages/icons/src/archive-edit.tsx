import { mdiArchiveEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveEdit(props: IconComponentProps) {
  return <Icon path={mdiArchiveEdit} {...props} />;
}

export { mdiArchiveEdit as path };
