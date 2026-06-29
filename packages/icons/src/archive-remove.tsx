import { mdiArchiveRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveRemove(props: IconComponentProps) {
  return <Icon path={mdiArchiveRemove} {...props} />;
}

export { mdiArchiveRemove as path };
