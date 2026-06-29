import { mdiKettleAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KettleAlert(props: IconComponentProps) {
  return <Icon path={mdiKettleAlert} {...props} />;
}

export { mdiKettleAlert as path };
