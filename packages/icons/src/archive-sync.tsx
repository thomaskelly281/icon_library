import { mdiArchiveSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveSync(props: IconComponentProps) {
  return <Icon path={mdiArchiveSync} {...props} />;
}

export { mdiArchiveSync as path };
