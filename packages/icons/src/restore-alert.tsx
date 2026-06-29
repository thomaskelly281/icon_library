import { mdiRestoreAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RestoreAlert(props: IconComponentProps) {
  return <Icon path={mdiRestoreAlert} {...props} />;
}

export { mdiRestoreAlert as path };
