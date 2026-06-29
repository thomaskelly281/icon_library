import { mdiKeyAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyAlert(props: IconComponentProps) {
  return <Icon path={mdiKeyAlert} {...props} />;
}

export { mdiKeyAlert as path };
