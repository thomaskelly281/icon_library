import { mdiReloadAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReloadAlert(props: IconComponentProps) {
  return <Icon path={mdiReloadAlert} {...props} />;
}

export { mdiReloadAlert as path };
