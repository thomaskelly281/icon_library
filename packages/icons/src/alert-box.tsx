import { mdiAlertBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertBox(props: IconComponentProps) {
  return <Icon path={mdiAlertBox} {...props} />;
}

export { mdiAlertBox as path };
