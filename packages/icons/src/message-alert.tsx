import { mdiMessageAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageAlert(props: IconComponentProps) {
  return <Icon path={mdiMessageAlert} {...props} />;
}

export { mdiMessageAlert as path };
