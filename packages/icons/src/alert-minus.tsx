import { mdiAlertMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertMinus(props: IconComponentProps) {
  return <Icon path={mdiAlertMinus} {...props} />;
}

export { mdiAlertMinus as path };
