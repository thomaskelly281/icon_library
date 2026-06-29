import { mdiAlertPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertPlus(props: IconComponentProps) {
  return <Icon path={mdiAlertPlus} {...props} />;
}

export { mdiAlertPlus as path };
