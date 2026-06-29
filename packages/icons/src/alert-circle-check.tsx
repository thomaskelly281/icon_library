import { mdiAlertCircleCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertCircleCheck(props: IconComponentProps) {
  return <Icon path={mdiAlertCircleCheck} {...props} />;
}

export { mdiAlertCircleCheck as path };
