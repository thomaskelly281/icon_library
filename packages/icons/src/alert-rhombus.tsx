import { mdiAlertRhombus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertRhombus(props: IconComponentProps) {
  return <Icon path={mdiAlertRhombus} {...props} />;
}

export { mdiAlertRhombus as path };
