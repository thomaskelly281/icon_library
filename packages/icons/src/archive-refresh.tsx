import { mdiArchiveRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveRefresh(props: IconComponentProps) {
  return <Icon path={mdiArchiveRefresh} {...props} />;
}

export { mdiArchiveRefresh as path };
