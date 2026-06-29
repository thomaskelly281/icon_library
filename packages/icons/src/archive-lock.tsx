import { mdiArchiveLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveLock(props: IconComponentProps) {
  return <Icon path={mdiArchiveLock} {...props} />;
}

export { mdiArchiveLock as path };
