import { mdiArchiveLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveLockOpen(props: IconComponentProps) {
  return <Icon path={mdiArchiveLockOpen} {...props} />;
}

export { mdiArchiveLockOpen as path };
