import { mdiDeleteAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteAlert(props: IconComponentProps) {
  return <Icon path={mdiDeleteAlert} {...props} />;
}

export { mdiDeleteAlert as path };
