import { mdiArchiveCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveCancel(props: IconComponentProps) {
  return <Icon path={mdiArchiveCancel} {...props} />;
}

export { mdiArchiveCancel as path };
