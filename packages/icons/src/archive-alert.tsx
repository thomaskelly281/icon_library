import { mdiArchiveAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveAlert(props: IconComponentProps) {
  return <Icon path={mdiArchiveAlert} {...props} />;
}

export { mdiArchiveAlert as path };
