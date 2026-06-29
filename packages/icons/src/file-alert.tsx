import { mdiFileAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileAlert(props: IconComponentProps) {
  return <Icon path={mdiFileAlert} {...props} />;
}

export { mdiFileAlert as path };
